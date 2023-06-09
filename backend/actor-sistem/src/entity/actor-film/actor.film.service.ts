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

            let actors = await this.actorFilmRepository.createQueryBuilder('films')
                .innerJoin(ActorEntity, 'actor', 'films."actorId" = actor."actorId"')
                .innerJoin(RoleEntity, 'role', 'role."roleId" = films."roleId"')
                .select('actor."actorId", actor."firstName", actor."lastName", role."roleId", role."roleName"')
                .where(` films."filmId" = ${filmId}`)
                .getRawMany(); 

            return actors
            // let filmActor = await this.actorFilmRepository.find({
            //     relations : {
            //         role: true,
            //         actors: true
            //     },
            //     where: {
            //         filmId: filmId
            //     }
            // });

            // let actorss = await this.actorRepository.find({
            //     select: {
            //         actorId: true,
            //         firstName: true,
            //         lastName: true,
            //     },
            //     where: {
            //         films: filmActor
            //     }
            // })
            // if(actorss.length === 0){
            //     return [];
            // }
            // return actorss.map(item => {
            //     let actor = ({...item, 
            //     ...filmActor.find(film => film.actors.actorId === item.actorId), 
            //     actors: undefined,
            //     filmId: undefined,
            //     recordId: undefined
            //     })
            //     let role = actor.role;
            //     return {
            //         ...actor,
            //         role: role.roleName
            //     }
            // });
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

    async getFilmsForActorAndRole(fio: string, roleName: string){
        try{

            let films = await this.actorFilmRepository.createQueryBuilder()
                .select('films')
                .from(ActorFilmEntity, 'films')
                .innerJoin(ActorEntity, 'actor', 'films."actorId" = actor."actorId"')
                .innerJoin(RoleEntity, 'role', 'role."roleId" = films."roleId"')
                .where(`lower(concat(actor."firstName",' ',actor."lastName")) like lower('%${fio}%')`)
                .andWhere(`role."roleName" like '${roleName}'`)
                .getMany()
            
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