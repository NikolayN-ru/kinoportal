import { Controller, Delete } from "@nestjs/common";
import { Ctx, MessagePattern, Payload, RmqContext } from "@nestjs/microservices";


@Controller('photo')
export class PhotoController{

    @MessagePattern('get.files')
    getFiles(@Payload() data: any, @Ctx() context: RmqContext) {       
        return [];
    }

    @MessagePattern('add.file')
    addFilesBySaveEntity(@Payload() data: any, @Ctx() context: RmqContext) {       
        return [];
    }

    @MessagePattern('delete.files')
    deletePhotoByDeleteEntity(@Payload() data: any, @Ctx() context: RmqContext) {       
        return [];
    }

    @MessagePattern('create.file')
    createMainFile(@Payload() data: any, @Ctx() context: RmqContext) {       
        return [];
    }

    @MessagePattern('delete.main.file')
    deleteMainFiles(@Payload() data: any, @Ctx() context: RmqContext) {       
        return [];
    }
}