import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, createQueryBuilder } from 'typeorm';
import { ActorDto } from '../..//dto/actor.dto'
import { AddActorDto } from 'src/dto/add.actor.dto';
import { ClientProxy } from '@nestjs/microservices';
import { ActorFilmEntity } from './actor.film.entity';
import { retry } from 'rxjs';
import { ActorEntity } from '../actor/actor.entity';

@Injectable()
export class ActorFilmService { 

    constructor(@InjectRepository(ActorFilmEntity)
    private actorFilmRepository: Repository<ActorFilmEntity>,
    @InjectRepository(ActorEntity)
    private actorRepository: Repository<ActorEntity>) {}


    async getActorsForFilms(filmId: any){
        try{
            let actors = await this.actorRepository
            .createQueryBuilder('actor')
            .innerJoin(ActorFilmEntity, "film", 'film.actorId = actor.actorId')
            .where('film.filmId =:filmId',{filmId})
            .getMany();
            if(actors.length === 0){
                throw new HttpException('Нет актеров по такому фильму', HttpStatus.NOT_FOUND); 
            }
            return actors;
        }   
        catch(e){
            throw e;
        }   
    }
}