import { Controller, Delete } from "@nestjs/common";
import { FilesService } from "./files.service";
import { Ctx, MessagePattern, Payload, RmqContext } from "@nestjs/microservices";
import { UpdateFilesByEntityDto } from "src/dto/updateFilesByEntity.dto";
import { DeleteFileByEntityDto } from "src/dto/deleteFileByEntity.dto";
import { DirFilesService } from "../dir-files.service";


@Controller('photo')
export class PhotoController{

    constructor(private filesService: FilesService,
        private dirFilesService: DirFilesService){}

    @MessagePattern('get.files')
    getFiles(@Payload() data: any, @Ctx() context: RmqContext) {       
        return this.filesService.viewFiles(data.assenceTable, data.arrActors);
    }

    @MessagePattern('add.file')
    addFilesBySaveEntity(@Payload() data: UpdateFilesByEntityDto, @Ctx() context: RmqContext) {     
        return this.filesService.saveEntity(data.assenceTable, data.assenceId, data.files);
    }

    @MessagePattern('delete.files')
    deletePhotoByDeleteEntity(@Payload() data: DeleteFileByEntityDto, @Ctx() context: RmqContext) {       
        return this.filesService.deleteEntity(data.assenceTable, data.assenceId);
    }

    @MessagePattern('create.file')
    createMainFile(@Payload() data: any, @Ctx() context: RmqContext) {       
        return this.filesService.createMainFileForFilm(data);
    }

    @MessagePattern('delete.main.file')
    deleteMainFiles(@Payload() data: any, @Ctx() context: RmqContext) {       
        return this.dirFilesService.deleteMainFile(data);
    }
}