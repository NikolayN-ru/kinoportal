import { Controller, Delete } from "@nestjs/common";
import { PhotoService } from "./photo.service";
import { Ctx, MessagePattern, Payload, RmqContext } from "@nestjs/microservices";
import { UpdatePhotoByEntityDto } from "src/dto/updatePhotoByEntity.dto";
import { DeletePhotoByEntityDto } from "src/dto/deletePhotoByEntity.dto";


@Controller('photo')
export class PhotoController{

    constructor(private photoService: PhotoService){}

    @Delete()
    delete(){
        return this.photoService.deleteFiles();
    }

    @MessagePattern('add.photo')
    postPhoto(@Payload() data: any, @Ctx() context: RmqContext) {       
        return this.photoService.create(data);
    }
    
    @MessagePattern('update.photo')
    updatePhotoBySaveEntity(@Payload() data: UpdatePhotoByEntityDto, @Ctx() context: RmqContext) {    
        console.log(data);   
        return this.photoService.saveEntity(data.assenceTable, data.assenceId, data.photos);
    }

    @MessagePattern('delete.photo')
    deletePhotoByDeleteEntity(@Payload() data: DeletePhotoByEntityDto, @Ctx() context: RmqContext) {       
        return this.photoService.deleteEntity(data.assenceTable, data.assenceId);
    }
}