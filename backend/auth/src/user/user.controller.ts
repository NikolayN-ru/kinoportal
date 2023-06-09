import {Body, Controller, Get,  Param, Post} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateCommentDto} from "./dto/create-comment";
import {DeleteUserDto} from "./dto/delete-user.dto";
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    
    @MessagePattern('delete.user')
    deleteUser(@Body() dto: DeleteUserDto) {
        return this.userService.deleteUser(dto.email);
    }

    @MessagePattern('getComments')
    getComments(@Payload() data: any, @Ctx() context: RmqContext) {  
        return this.userService.getComments(data.userId, data.reviewId);
    }

    @MessagePattern('createComment')
    createComment(@Payload() data: any, @Ctx() context: RmqContext) {  
        return this.userService.createComment(data.userId, data.reviewId, data.commentDto)
    }
}
