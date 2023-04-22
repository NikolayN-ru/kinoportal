import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";
import {Review} from "./review.entity";

@Entity()
export class Movie{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    email: string;

    @Column("text", {array: true})
    genre: string[];

    @Column()
    year: number;

    @Column()
    country: string;

    @Column()
    password: string;

    @OneToMany(type => Review, (review) => review.movie)
    reviews: Review[];
}