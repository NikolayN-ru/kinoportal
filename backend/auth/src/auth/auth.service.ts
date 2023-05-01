import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {JwtService} from "@nestjs/jwt";
import {User} from "../user/user.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import * as bcrypt from 'bcryptjs';
import {LoginUserDto} from "./dto/login-user.dto";

@Injectable()
export class AuthService {

    constructor(private jwtService: JwtService,
                @InjectRepository(User) private userRepository: Repository<User>) {}

    async login(userDto: LoginUserDto) {
        if(!userDto.email || !userDto.password) {
            throw new HttpException('Введены не все данные', HttpStatus.BAD_REQUEST)
        }
        try {
            const user = await this.validateUser(userDto);
            const token = await this.generateToken(user);

            user.password = userDto.password;
            return {
                ...user,
                token
            }
        } catch (e) {
            return {
                status: e.status,
                message: e.message
            }
        }
    }

    async registration(registrationDto: CreateUserDto) {
        if(!registrationDto.email || !registrationDto.password) {
            throw new HttpException('Введены не все данные', HttpStatus.BAD_REQUEST);
        }

        const candidate = await this.userRepository.findOne({
            where: {
                email: registrationDto.email
            }});
        if(candidate) {
            throw new HttpException('Пользователь существует', HttpStatus.BAD_REQUEST);
        }
        try {
            const hashPassword = await bcrypt.hash(registrationDto.password, 5);

            const user = new User();
            user.username = registrationDto.username;
            user.email = registrationDto.email;
            user.password = hashPassword;

            await this.userRepository.save(user);

            const token = await this.generateToken(user);
            user.password = registrationDto.password;

            return {
                ...user,
                token
            };
        } catch (e) {
            return {
                status: e.status,
                message: e.message
            }
        }
    }

    private async generateToken(user: User) {
        const payload = {email: user.email, id: user.id};
        return this.jwtService.sign(payload)
    }

    private async validateUser(userDto: LoginUserDto) {
        const user = await this.userRepository.findOne({
            where: {
                email: userDto.email
        }});

        if(!user) {
            throw new UnauthorizedException({message: "Незарегистрированный пользоваетель"});
        }
        const passwordEquals = await bcrypt.compare(userDto.password, user.password);
        if(passwordEquals) {
            return user;
        }

        throw new UnauthorizedException({message: 'Неверный пароль'});
    }

    async otherLogin(req) {
        if(!req.user) {
            throw new UnauthorizedException({message: 'Нет такого пользователя'});
        }
        try {
            const user = await this.userRepository.findOneBy({
                email: req.user.email
            });

            if(!user) {
                const newUser = new User();
                newUser.username = req.user.username;
                newUser.email = req.user.email;
                newUser.password = req.user.accessToken;

                await this.userRepository.save(newUser);

                return {
                    ...newUser,
                    picture: req.user.picture
                };
            }

            return {
                ...user,
                picture: req.user.picture
            }
        } catch (e) {
            return {
                status: e.status,
                message: e.message
            }
        }
    }
}
