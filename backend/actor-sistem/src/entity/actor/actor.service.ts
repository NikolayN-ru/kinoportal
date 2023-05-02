import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ActorEntity } from './actor.entity';
import { Repository } from 'typeorm';
import { ActorDto } from '../..//dto/actor.dto'
import { AddActorDto } from 'src/dto/add.actor.dto';
import { ClientProxy } from '@nestjs/microservices';
import { ActorFilmService } from '../actor-film/actor.film.service';

@Injectable()
export class ActorService { 

    constructor(@InjectRepository(ActorEntity)
    private actorRepository: Repository<ActorEntity>,
    @Inject('Photo')
    private clientPhoto: ClientProxy,
    @Inject('Movie')
    private clientMovie: ClientProxy,
    private actorFilmService: ActorFilmService){}


    async addActor(actorDto: AddActorDto, files: any){
        try{
            if(actorDto.firstName === undefined || actorDto.lastName === undefined){
                throw new HttpException('Введите имя и фамилию', HttpStatus.BAD_REQUEST);  
            }
            let actor = await this.actorRepository.save(actorDto);
            if(!(files.length === 0)){
                this.clientPhoto.send('add.file',{
                    assenceTable: "actor",
                    assenceId: actor.actorId,
                    files: files
                }).toPromise();
            }
            return "Добавлен";
        }   
        catch(e){
            return {
                status: e.status,
                message: e.message
            };
        }            
    }

    async updateActor(actorDto: ActorDto){
        try{
            if(actorDto.firstName === undefined || actorDto.lastName === undefined){
                throw new HttpException('Введите имя и фамилию', HttpStatus.BAD_REQUEST);  
            }
            const actor = await this.checkingForExistence(actorDto.actorId);
            await this.actorRepository.save(actorDto);
            return "Изменен"
        }   
        catch(e){
            return {
                status: e.status,
                message: e.message
            };
        }   
    }

    async deleteActor(actorId: number){
        try{
            const actor = await this.checkingForExistence(actorId);

            await this.clientPhoto.send('delete.files',{
                    assenceTable: "actor",
                    assenceId: actor.actorId
            }).toPromise();
            await this.actorRepository.remove(actor);
            return "Удален"
        }   
        catch(e){
            return {
                status: e.status,
                message: e.message
            };
        }   
    }

    async getActor(actorId: number){
        try{
            const actor = await this.checkingForExistence(actorId);
            const files = await this.clientPhoto.send('get.files',{arrActors:[actor.actorId], assenceTable: 'actor'}).toPromise();
            const moviesId = (await this.actorFilmService.getFilmsForActor(actor.actorId)).map(item => item.filmId);
            const movies = await this.clientMovie.send('get.movie.for.actor', moviesId).toPromise();
            return {
                ...actor,
                ...files[0],
                id: undefined,
                movies: movies
            };
        }   
        catch(e){
            return {
                status: e.status,
                message: e.message
            };
        }   
    }

    async getAllActors(){
        try{
            const actors = await this.actorRepository.findBy({});
            const actorsId = await actors.map(item => item.actorId);
            const files = await this.clientPhoto.send('get.files',{arrActors: actorsId, assenceTable: 'actor'}).toPromise();
            const otv = actors.map(actor => ({...actor, ...files.find(file => file.id === actor.actorId)}));
            return otv.map(actor => ({...actor, id: undefined}))
        }   
        catch(e){
            return {
                status: e.status,
                message: e.message
            };
        }   
    }

    async getActorsForFilm(filmId: any){
        try{
            let actors = this.actorFilmService.getActorsForFilms(filmId);
            let arrActors = [];
            await actors.then(result => arrActors = result);
            const actorsId = await arrActors.map(item => item.actorId);
            const files = await this.clientPhoto.send('get.files',{arrActors: actorsId, assenceTable: 'actor'}).toPromise();
            const otv = await arrActors.map(actor => ({...actor, ...files.find(file => file.id === actor.actorId)}));
            return otv.map(actor => ({...actor, id: undefined}))
        }   
        catch(e){
            return {
                status: e.status,
                message: e.message
            };
        }   
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
