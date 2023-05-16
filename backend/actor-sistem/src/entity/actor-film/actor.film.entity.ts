import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ActorEntity } from "../actor/actor.entity";

@Entity()
export class ActorFilmEntity{

    @PrimaryGeneratedColumn()
    recordId: number

    @Column()
    filmId:number

    @ManyToOne(() => ActorEntity, (actor) => actor.films)
    @JoinColumn({name: 'actorId'})
    actors: ActorEntity
}