import { Column, JoinTable, Entity, PrimaryGeneratedColumn, OneToMany, ManyToMany } from "typeorm";
import {Review} from "./review.entity";
import {Genre} from "./genre.entity";
import {Country} from "./country.entity";

@Entity()
export class Movie{

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(() => Genre, (genre) => genre.movies )
    @JoinTable()
    genres: Genre[];

    @ManyToMany(() => Country, (country) => country.movies )
    @JoinTable()
    countries: Country[];

    @Column()
    year: number;

    @Column()
    country: string;

    @OneToMany(type => Review, (review) => review.movie)
    reviews: Review[];
}