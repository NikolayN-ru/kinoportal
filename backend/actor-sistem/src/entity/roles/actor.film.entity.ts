import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ActorFilmEntity } from "../actor-film/actor.film.entity";

@Entity()
export class RoleEntity{

    @PrimaryGeneratedColumn()
    roleId: number

    @Column()
    roleName:string

    @OneToMany(() => ActorFilmEntity, (film) => film.role)
    filmsActor: ActorFilmEntity[]
}