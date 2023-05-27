import {Column, Entity, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../user/user.entity";

@Entity()
export class Role {
    @ApiProperty({example: '1', description: 'Уникальный индентификатор'})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({example: 'ADMIN', description: 'Имя роли'})
    @Column({unique: true})
    role: string;

    @ManyToMany(() => User,
        (user) => user.roles,
        {
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        })
    users: User[];
}