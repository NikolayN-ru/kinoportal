import {Column, Entity, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../user/user.entity";

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

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