import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Actor } from './actor.entity';
import { Repository } from 'typeorm';
import { ActorDto } from '../dto/actor.dto'
import { AddActorDto } from 'src/dto/add.actor.dto';

@Injectable()
export class ActorService { 

    constructor(@InjectRepository(Actor)
    private actorRepository: Repository<Actor> ){}


    async addActor(actorDto: AddActorDto){
        try{
            if(actorDto.firstName === undefined || actorDto.lastName === undefined){
                throw new HttpException('Введите имя и фамилию', HttpStatus.BAD_REQUEST);  
            }
            await this.actorRepository.save(actorDto);
            return "Добалвен"
        }   
        catch(e){
            throw e;
        }            
    }

    async updateActor(actorDto: ActorDto){
        try{
            this.checkingForExistence(actorDto.actorId);
            await this.actorRepository.save(actorDto);
            return "Изменен"
        }   
        catch(e){
            throw e;
        }   
    }

    async deleteActor(actorId: number){
        try{
            const actor = await this.checkingForExistence(actorId);
            await this.actorRepository.remove(actor);
            return "Удален"
        }   
        catch(e){
            throw e;
        }   
    }

    async getActor(actorId: number){
        try{
            const actor = await this.checkingForExistence(actorId);
            return actor;
        }   
        catch(e){
            throw e;
        }   
    }

    getActorsOfTheFilm(filmId: number){

    }

    private async checkingForExistence(actorId: number){
        if(actorId === undefined ){
            throw new HttpException('Введите id актера', HttpStatus.BAD_REQUEST); 
        }
        const actor = await this.actorRepository.findOne({
            where: { actorId: actorId }
        })
        if(!actor){
            throw new HttpException('Нет актера с таким id', HttpStatus.NOT_FOUND); 
        }
        return actor;
    }
}
