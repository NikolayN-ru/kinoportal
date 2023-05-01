import {Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany} from "typeorm";
import {Movie} from "./movie.entity";
import {Comment} from "./comment.entity";

@Entity()
export class Review {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @ManyToOne(type => Movie, (movie) => movie.reviews)
    movie: Movie;

    @OneToMany(type => Comment, (comment) => comment.review)
    comments: Comment[];
}