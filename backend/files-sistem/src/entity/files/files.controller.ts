import { Controller, Delete } from "@nestjs/common";
import { FilesService } from "./files.service";
import { Ctx, MessagePattern, Payload, RmqContext } from "@nestjs/microservices";
import { UpdateFilesByEntityDto } from "src/dto/updateFilesByEntity.dto";
import { DeleteFileByEntityDto } from "src/dto/deleteFileByEntity.dto";


@Controller('photo')
export class PhotoController{

    constructor(private filesService: FilesService){}

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
}