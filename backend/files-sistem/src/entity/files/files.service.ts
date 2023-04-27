import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brackets, Repository } from 'typeorm';
import { DirFilesService } from '../dir-files.service';
import { FilesEntity } from './files.entity';
import { FileDto } from 'src/dto/file.dto';

@Injectable()
export class FilesService {

    constructor(@InjectRepository(FilesEntity)
            private filesRepository: Repository<FilesEntity>,
            private dirFileService: DirFilesService){}

    async viewFiles(assenceTable: string, assenceId: Array<number>){
        try{
            const files = await this.filesRepository
                .createQueryBuilder()
                .select('files')
                .from(FilesEntity, "files")
                .where("files.assenceTable =:assenceTable", {assenceTable})
                .andWhere("files.assenceId in (:...assenceId)", {assenceId})
                .getMany();
            return this.dirFileService.getFullFileName(files);
        }
        catch(e){
            throw new Error('Ошибка при выводе файла из бд');
        }
    }

    async saveEntity(assenceTable: string, assenceId: number, photos: Array<any>){
        try{
            const fileDto: FileDto = {
                fileId: undefined,
                fileName: undefined,
                assenceTable: assenceTable,
                assenceId: assenceId
            }
            photos.forEach((image)=>{
                this.create(image, fileDto);
            })
        }
        catch(e){
            throw new Error('Ошибка при добавлении записей в бд с файлами');
        }
    }

    async create( image: any, fileDto: FileDto){
        try{
            const exp = image.originalname.split('.')[1];
            const fileName = await this.dirFileService.createFile(image,exp);
            const file = await this.filesRepository.save({...fileDto, fileName: fileName})
            return file.fileId;
        }
        catch(e){
            throw new Error('Ошибка при создании файла');
        }
    }

    async deleteEntity(assenceTable: string, id:number){
        try{
            const files = await this.filesRepository
                    .createQueryBuilder() 
                    .select("files.fileName")
                    .from(FilesEntity, "files")
                    .where('files.assenceTable like :assenceTable', {assenceTable} )
                    .andWhere("files.assenceId = :id", {id})
                    .getMany();
            if(files.length === 0){
                return;
            }
            const otv = await this.filesRepository
                    .createQueryBuilder()
                    .delete()
                    .from(FilesEntity, "files")
                    .where("assenceTable like :assenceTable", {assenceTable})
                    .andWhere("assenceId = :id", {id})
                    .execute()

            this.dirFileService.deleteFile(files);
        }
        catch(e){
            throw new Error('Ошибка при удалении файлов');
        }
    }

}
