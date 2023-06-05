import {Body, Controller, Get,  Inject,  Param, Post} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateCommentDto } from 'src/dto/auth/create-comment';

@ApiTags('Comments')
@Controller('user')
export class UserController {
    constructor(@Inject('Auth')
    private clientAuth: ClientProxy) {}

    @ApiOperation({summary: 'Получение комментариев под резенцией'})
    @ApiResponse({status: 200, type: String})
    @Get('/:userId/comment/:reviewId')
    getComments(@Param('userId') userId: string,
                @Param('reviewId') reviewId: string) {
        return this.clientAuth.send('getComments',{userId,reviewId});
    }

    @ApiOperation({summary: 'Создание комментария под резенцией'})
    @ApiResponse({status: 200, type: String})
    @Post('/:userId/comment/:reviewId')
    createComment(@Param('userId') userId: string,
                  @Param('reviewId') reviewId: string,
                  @Body() commentDto: CreateCommentDto) {
        return this.clientAuth.send('createComment',{userId,reviewId,commentDto});
    }

    //добавить удаление комментария
}
