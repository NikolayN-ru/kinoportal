import {IsNotEmpty, IsNumber} from "class-validator";

export class CreateCommentDto {
    readonly reviedId: number;

    readonly comment: string;
}
