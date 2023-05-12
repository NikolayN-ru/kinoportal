import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../auth/roles.entity";

@Entity()
export class User {
    @ApiProperty({example: '1', description: 'Уникальный индентификатор'})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({example: 'Alex', description: 'Имя пользоавателя'})
    @Column()
    username: string;

    @ApiProperty({example: '134@gmail.ru', description: 'Почта пользоавателя'})
    @Column({unique: true})
    email: string;

    @ApiProperty({example: 'feffa234a', description: 'Пароль пользоавателя'})
    @Column()
    password: string;

    @ManyToMany(() => Role,
        (role) => role.users,
        {
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
            cascade: true
        })
    @JoinTable()
    roles: Role[];
}