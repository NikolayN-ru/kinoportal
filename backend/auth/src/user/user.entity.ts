import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import {ApiProperty} from "@nestjs/swagger";

@Entity()
export class User {
    @ApiProperty({example: '1', description: 'Уникальный индентификатор'})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({example: '134@gmail.ru', description: 'Почта пользоавателя'})
    @Column({unique: true})
    email: string;

    @ApiProperty({example: 'feffa234a', description: 'Пароль пользоавателя'})
    @Column()
    password: string;
}