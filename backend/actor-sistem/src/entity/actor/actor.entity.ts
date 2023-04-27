import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ActorFilmEntity } from "../actor-film/actor.film.entity";

@Entity()
export class ActorEntity{

    @PrimaryGeneratedColumn()
    actorId: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column("text", {nullable: true})
    story: string;

    @Column("text", {nullable: true})
    biography: string;

    @OneToMany(() => ActorFilmEntity, (film) => film.actors)
    films: ActorFilmEntity[]
}