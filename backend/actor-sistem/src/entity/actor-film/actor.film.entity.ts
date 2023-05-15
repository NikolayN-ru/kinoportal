import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ActorEntity } from "../actor/actor.entity";
import { RoleEntity } from "../roles/actor.film.entity";

@Entity()
export class ActorFilmEntity{

    @PrimaryGeneratedColumn()
    recordId: number

    @Column()
    filmId:number

    @ManyToOne(() => ActorEntity, (actor) => actor.films)
    @JoinColumn({name: 'actorId'})
    actors: ActorEntity

    @ManyToOne(() => RoleEntity, (role) => role.filmsActor)
    @JoinColumn({name: 'roleId'})
    role: RoleEntity
}