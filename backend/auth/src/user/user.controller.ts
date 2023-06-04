import {Body, Controller, Get,  Param, Post} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateCommentDto} from "./dto/create-comment";
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    // @Get('/:userId/comment/:reviewId')
    // getComments(@Param('userId') userId: string,
    //             @Param('reviewId') reviewId: string) {
    //     return this.userService.getComments(+userId, +reviewId);
    // }

    // @Post('/:userId/comment/:reviewId')
    // createComment(@Param('userId') userId: string,
    //               @Param('reviewId') reviewId: string,
    //               @Body() commentDto: CreateCommentDto) {
    //     return this.userService.createComment(+userId, +reviewId, commentDto)
    // }


    @MessagePattern('getComments')
    getComments(@Payload() data: any, @Ctx() context: RmqContext) {  
        return this.userService.getComments(data.userId, data.reviewId);
    }

    @MessagePattern('createComment')
    createComment(@Payload() data: any, @Ctx() context: RmqContext) {  
        return this.userService.createComment(data.userId, data.reviewId, data.commentDto)
    }
    
    //добавить удаление комментария
}
