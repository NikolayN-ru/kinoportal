import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import { ActorFilmEntity } from './actor.film.entity';
import { ActorEntity } from '../actor/actor.entity';
import { RoleEntity } from '../roles/actor.film.entity';

@Injectable()
export class ActorFilmService { 

    constructor(@InjectRepository(ActorFilmEntity)
    private actorFilmRepository: Repository<ActorFilmEntity>,
    @InjectRepository(ActorEntity)
    private actorRepository: Repository<ActorEntity>,
    @InjectRepository(RoleEntity)
    private roleRepository: Repository<RoleEntity>) {}


    async getActorsForFilms(filmId: any){
        try{
            let filmActor = await this.actorFilmRepository.find({
                relations : {
                    role: true,
                    actors: true
                },
                where: {
                    filmId: filmId
                }
            });

            let actorss = await this.actorRepository.find({
                select: {
                    actorId: true,
                    firstName: true,
                    lastName: true,
                },
                where: {
                    films: filmActor
                }
            })
            if(actorss.length === 0){
                return [];
            }
            return actorss.map(item => {
                let actor = ({...item, 
                ...filmActor.find(film => film.actors.actorId === item.actorId), 
                actors: undefined,
                filmId: undefined,
                recordId: undefined
                })
                let role = actor.role;
                return {
                    ...actor,
                    role: role.roleName
                }
            });
        }   
        catch(e){
            throw e;
        }   
    }

    async getFilmsForActor(actorId: any){
        try{
            let films = await this.actorFilmRepository
            .createQueryBuilder('film')
            .innerJoin(ActorEntity, "actor", 'film.actorId = actor.actorId')
            .where('actor.actorId = :actorId',{actorId})
            .getMany();
            if(films.length === 0){
                return [];
            }
            return films;
        }   
        catch(e){
            throw e;
        }   
    }

    async getFilmsForActorAndRole(actorId: number, roleName: string){
        try{

            let role = await this.roleRepository.findOne({
                where: {roleName: roleName}
            })

            let actor = await this.actorRepository.findOne({
                where: {actorId: actorId}
            })

            let films = await this.actorFilmRepository.find({
                where: {
                    actors: actor,
                    role: role
                },
                relations : {
                    actors: true,
                    role: true,
                }
            })
            if(films.length === 0){
                return [];
            }
            return films;
        }   
        catch(e){
            throw e;
        }   
    }

    async createFilm(filmId: number, actorsId: any, role: string){            
        try{

            if(typeof(actorsId) === 'string'){
                actorsId = actorsId.replace('[','').replace(']','').split(',');
            }

            let actors = await this.actorRepository
                .createQueryBuilder()
                .select('actor')
                .from(ActorEntity, "actor")
                .where("actor.actorId in (:...actorsId)", {actorsId})
                .getMany();

            let roleId = await this.roleRepository
                .createQueryBuilder()
                .select('role')
                .from(RoleEntity, "role")
                .where("role.roleName = :role", {role})
                .getOne();

            let records = actors.map(item => {
                return {
                    filmId: filmId,
                    actors: item,
                    role: roleId
                }
            })

            await this.actorFilmRepository
                .createQueryBuilder()
                .insert()
                .into(ActorFilmEntity)
                .values(records)
                .execute()
            
            return "Добавлено"
        }
        catch(e){
            throw e;
        }
    }

    async deleteFilm(filmId: number){
        try{
            const result = await this.actorFilmRepository
                .createQueryBuilder()
                .delete()
                .from(ActorFilmEntity, "actor-film")
                .where("filmId = :filmId", {filmId})
                .execute()
            console.log(result.affected);
            console.log(filmId);
            return "Удалено"
        }
        catch(e){
            throw e;
        }
    }
}