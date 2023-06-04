import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Role} from "../auth/roles.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column({unique: true})
    email: string;

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