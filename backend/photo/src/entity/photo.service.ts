import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brackets, Repository } from 'typeorm';
import { FilesService } from './files.service';
import { Photo } from './photo.entity';
import { PhotoDto } from 'src/dto/photo.dto';

@Injectable()
export class PhotoService {

    constructor(@InjectRepository(Photo)
            private photoRepository: Repository<Photo>,
            private fileService: FilesService){}

    async create( image: any){
        try{
            const photoDto= new PhotoDto();
            const fileName = await this.fileService.createFile(image);
            const photo = await this.photoRepository.save({...photoDto, photoName: fileName})
            return photo.photoId;
        }
        catch(e){
            return e.message;
        }
    }

    async saveEntity(assenceTable: string, assenceId: number, photos: Array<number>){
        try{
            await this.photoRepository
                    .createQueryBuilder() 
                    .update(Photo)
                    .set({assenceId: assenceId, assenceTable: assenceTable})
                    .where("photoId in (:...photos)", {photos})
                    .execute()
        }
        catch(e){
            console.log(e);
            throw new Error('Ошибка при изменении файла');
        }
    }

    async deleteEntity(assenceTable: string, id:number){
        try{
            const otv = await this.photoRepository
                    .createQueryBuilder()
                    .update(Photo)
                    .set({assenceId: null, assenceTable: null})
                    .where("assenceTable like :assenceTable", {assenceTable})
                    .andWhere("assenceId = :id", {id})
                    .execute()
        }
        catch(e){
            throw new Error('Ошибка при изменении файла');
        }
    }
    
    async deleteFiles(){
        try{

            const files = await this.photoRepository
                    .createQueryBuilder() 
                    .select("photo.photoName")
                    .from(Photo, "photo")
                    .where('(NOW() - photo.createdAt) > :hourse', {hourse: '1 hours'} )
                    .andWhere(
                        new Brackets((qb) => {
                            qb.where("photo.assenceTable is NULL")
                            .orWhere("photo.assenceId is NULL")
                            })
                    )
                    .getMany();
            
            const count = await this.photoRepository
                    .createQueryBuilder()
                    .delete()
                    .from(Photo)
                    .where('(NOW() - createdAt) > :hourse', {hourse: '1 hours'} )
                    .andWhere(
                        new Brackets((qb) => {
                            qb.where("assenceTable is NULL")
                            .orWhere("assenceId is NULL")
                            })
                    )
                    .execute()
            this.fileService.deleteFile(files);
            return `Количество удаленных строк: ${count.affected}`;
        }
        catch(e){
            return e.message;
        }
    }

}
