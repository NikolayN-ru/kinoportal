import {Body, Controller, Get,  Param, Post} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateCommentDto} from "./dto/create-comment";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('/:userId/comment/:reviewId')
    getComments(@Param('userId') userId: string,
                @Param('reviewId') reviewId: string) {
        return this.userService.getComments(+userId, +reviewId);
    }

    @Post('/:userId/comment/:reviewId')
    createComment(@Param('userId') userId: string,
                  @Param('reviewId') reviewId: string,
                  @Body() commentDto: CreateCommentDto) {
        return this.userService.createComment(+userId, +reviewId, commentDto)
    }
}
