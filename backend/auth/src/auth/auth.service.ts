import {
    HttpException,
    HttpStatus,
    Injectable,
    InternalServerErrorException,
    UnauthorizedException
} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {JwtService} from "@nestjs/jwt";
import {User} from "../user/user.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import * as bcrypt from 'bcryptjs';
import {LoginUserDto} from "./dto/login-user.dto";
import { sign } from 'jsonwebtoken';
import {Role} from "./roles.entity";

export enum Provider {
    GOOGLE = 'google',
}


@Injectable()
export class AuthService {
    private readonly JWT_SECRET_KEY = "CnpG95vCX0zv5MONkDxXML9UaQ1Fc8u2-";                                        // Randomly generated key to sign jwt and verify it later

    constructor(private jwtService: JwtService,
                @InjectRepository(User) private userRepository: Repository<User>,
                @InjectRepository(Role) private roleRepository: Repository<Role>) {}

    async login(userDto: LoginUserDto) {
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
        try {
            const candidate = await this.userRepository.findOne({
                where: {
                    email: registrationDto.email
                }});

            if(candidate) {
                throw new HttpException('Пользователь существует', HttpStatus.BAD_REQUEST);
            }

            const hashPassword = await bcrypt.hash(registrationDto.password, 5);

            const user = new User();
            user.username = registrationDto.username;
            user.email = registrationDto.email;
            user.password = hashPassword;

            let role = await this.roleRepository.findOneBy({
                role: 'User'
            })

            if(!role) {
                role = new Role();
                role.role = 'User'
            }

            user.roles = [role];

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
        const payload = {email: user.email, id: user.id, username: user.username, roles: user.roles};
        return this.jwtService.sign(payload)
    }

    private async validateUser(userDto: LoginUserDto) {
        const user = await this.userRepository.findOne({
            where: {
                email: userDto.email
        },
        relations: {
                roles: true
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

    async validateOAuthLogin(thirdPartyId: string, provider: Provider, name: string, email: string, picture: string): Promise<string> {
        try {
            const payload = {thirdPartyId, provider, name, email, picture};
            return sign(payload, this.JWT_SECRET_KEY, {expiresIn: 3600});                        // create jwt, valid for 1 hour
        } catch (err) {
            throw new InternalServerErrorException('validateOAuthLogin', err.message);
        }
    }

    reportJwt(req) {
        const jwt: string = req.user.jwt;
        if (jwt) return {
            message: 'authentication succeeded',
            jwt: jwt,
        };
        else return {message: "Authentication failed."}
    }

    userInfo(req) {
        if (!req.user) {
            return 'nothing found!';
        }
        console.log(req.user)
        return {
            firstName: req.user.name.givenName,
            email: req.user.email[0].value,
            picture: req.user.picture
        };
    }

}
