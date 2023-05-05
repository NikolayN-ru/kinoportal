import {Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToMany} from "typeorm";
import {Movie} from "../../movie/entity/movie.entity";

@Entity()
export class Genre{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    genre: string;

    @ManyToMany(() => Movie, (movie) => movie.genres)
    movies: Movie[];
}