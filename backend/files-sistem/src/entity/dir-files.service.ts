import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid';
import { FilesEntity } from './files/files.entity';


@Injectable()
export class DirFilesService {

    async createFile(file: any, exp: string): Promise<string>{
        try{
            const fileName = uuid.v4() + `.${exp}`;
            const filePath = path.resolve(__dirname, '../..','image');
            if(!fs.existsSync(filePath)){
                fs.mkdirSync(filePath,{recursive: true})
            }
            const buffer = Buffer.from(file.buffer.data);
            fs.writeFileSync(path.join(filePath,fileName),buffer);

            return fileName;
        }
        catch(e){
            console.log(e);
            throw new HttpException('Произошла ошибка при записе файла', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async deleteFile(files: Array<any>){
        try{
            for(let i = 0; i < files.length; i++){
                const filePath = path.resolve(__dirname, '../..','image', files[i].fileName.toString());
                fs.unlink(filePath, err =>{ 
                    if(err){}
                });
            }
        }
        catch(e){
            throw new HttpException('Произошла ошибка при удалении файла', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async deleteMainFile(file: string){
        try{
            const filePath = path.resolve(__dirname, '../..','image', file.toString());
            fs.unlink(filePath, err =>{ 
                if(err){}
            });
        }
        catch(e){
            throw new HttpException('Произошла ошибка при удалении файла', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    getFullFileName(filesNames:any){
        let otv = [];
        filesNames.forEach(item => {
            otv.push({filename: item.fileName, id: item.assenceId})
        })
        return otv;
    }
}
