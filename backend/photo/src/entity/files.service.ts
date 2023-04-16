import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid';
import { Photo } from './photo.entity';


@Injectable()
export class FilesService {

    async createFile(file): Promise<string>{
        try{
            const fileName = uuid.v4() + '.jpg';
            
            const filePath = path.resolve(__dirname, '..','static');
            if(!fs.existsSync(filePath)){
                fs.mkdirSync(filePath,{recursive: true})
            }
            fs.writeFileSync(path.join(filePath,fileName), file.buffer.data.toString());

            return fileName;
        }
        catch(e){
            throw new HttpException('Произошла ошибка при записе файла', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async deleteFile(file: Array<Photo>){
        try{
            for(let i = 0; i < file.length; i++){
                const filePath = path.resolve(__dirname, '..','static', file[i].photoName.toString());
                fs.unlink(filePath, err =>{ //удаляем файл
                    if(err){}
                });
            }
        }
        catch(e){
            throw new HttpException('Произошла ошибка при удалении файла', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
