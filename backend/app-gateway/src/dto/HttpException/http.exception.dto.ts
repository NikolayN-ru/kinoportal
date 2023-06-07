import { ApiProperty } from "@nestjs/swagger";

export class HttpExceptionDto{
    @ApiProperty({ description: 'статус ошибки'})
    status:number;
    @ApiProperty({ description: 'сообщение ошибки'})
    message:string;
}