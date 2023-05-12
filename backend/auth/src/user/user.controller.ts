import {Body, Controller, Get,  Param, Post} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateCommentDto} from "./dto/create-comment";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";

@ApiTags('Комментарии')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @ApiOperation({summary: 'Получение комментариев под резенцией'})
    @ApiResponse({status: 200, type: String})
    @Get('/:userId/comment/:reviewId')
    getComments(@Param('userId') userId: string,
                @Param('reviewId') reviewId: string) {
        return this.userService.getComments(+userId, +reviewId);
    }

    @ApiOperation({summary: 'Создание комментария под резенцией'})
    @ApiResponse({status: 200, type: String})
    @Post('/:userId/comment/:reviewId')
    createComment(@Param('userId') userId: string,
                  @Param('reviewId') reviewId: string,
                  @Body() commentDto: CreateCommentDto) {
        return this.userService.createComment(+userId, +reviewId, commentDto)
    }

    //добавить удаление комментария
}
