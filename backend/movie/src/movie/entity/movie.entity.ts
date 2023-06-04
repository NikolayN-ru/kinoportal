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
    titleEng: string;

    @Column()
    year: number;

    @Column()
    quality: string;

    @Column()
    time: number

    @Column()
    imgVideo: string;

    @Column({type: "real"})
    rating: number;

    @Column()
    votes: number;

    @Column()
    description: string;

    @ManyToMany(() => Genre,
        (genre) => genre.movies,
        {
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
            cascade: true
        })
    @JoinTable()
    genres: Genre[];

    @ManyToMany(() => Country,
        (country) => country.movies,
        {
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
            cascade: true
        })
    @JoinTable()
    countries: Country[];

    @OneToMany(type => Review,
        (review) => review.movie,
        {
            cascade: true
        })
    reviews: Review[];
}