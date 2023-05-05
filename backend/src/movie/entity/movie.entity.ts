import { Column, JoinTable, Entity, PrimaryGeneratedColumn, OneToMany, ManyToMany } from "typeorm";
import {Review} from "./review.entity";
import {Genre} from "../../genre/entity/genre.entity";
import {Country} from "../../country/entity/country.entity";

@Entity()
export class Movie{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    typeVideo: string;

    @Column()
    year: number;

    @Column()
    quality: string;

    @Column()
    imgVideo: string;

    @Column("simple-json")
    ratingIvi: {
        rating: number,
        numberGrade: number
    }

    @Column()
    description: string;



    // @Column()
    // similarFilms: number[]; // по id
    //
    // @Column()
    // overVideo: number[];

    @ManyToMany(() => Genre,
        (genre) => genre.movies,
        {cascade: true})
    @JoinTable()
    genres: Genre[];

    @ManyToMany(() => Country,
        (country) => country.movies,
        {cascade: true})
    @JoinTable()
    countries: Country[];

    @OneToMany(type => Review,
        (review) => review.movie,
        {cascade: true})
    reviews: Review[];
}