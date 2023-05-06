import {Column, Entity, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Movie} from "../../movie/entity/movie.entity";

@Entity()
export class Country {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    country: string;

    @ManyToMany(() => Movie,
        (movie) => movie.countries,
        {
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        })
    movies: Movie[];
}