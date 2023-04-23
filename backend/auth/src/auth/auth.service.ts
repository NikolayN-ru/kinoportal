import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {JwtService} from "@nestjs/jwt";
import {User} from "../user/user.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {

    constructor(private jwtService: JwtService,
                @InjectRepository(User) private userRepository: Repository<User>) {}

    async login(userDto: CreateUserDto) {
        if(!userDto.email || !userDto.password) {
            throw new HttpException('Введены не все данные', HttpStatus.BAD_REQUEST)
        }

        const user = await this.validateUser(userDto);
        return this.generateToken(user)
    }

    async registration(registrationDto: CreateUserDto) {
        if(!registrationDto.email || !registrationDto.password) {
            throw new HttpException('Введены не все данные', HttpStatus.BAD_REQUEST)
        }

        const candidate = await this.userRepository.findOne({where:{email: registrationDto.email}});
        if(candidate) {
            throw new HttpException('Пользователь сущетсвует', HttpStatus.BAD_REQUEST)
        }

        const hashPassword = await bcrypt.hash(registrationDto.password, 5);

        const user = new User();
        user.email = registrationDto.email;
        user.password = hashPassword;

        await this.userRepository.save(user);

        return this.generateToken(user)
    }

    private async generateToken(user: User) {
        const payload = {email: user.email, id: user.id};
        return {
            token : this.jwtService.sign(payload)
        }
    }

    private async validateUser(userDto: CreateUserDto) {
        const user = await this.userRepository.findOne({ where:{
            email: userDto.email
        }})

        const passwordEquals = await bcrypt.compare(userDto.password, user.password);
        if ( user && passwordEquals) {
            return user;
        }

        throw new UnauthorizedException({message: 'Wrong password'})
    }

}
