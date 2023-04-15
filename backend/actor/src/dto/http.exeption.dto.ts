import { ApiProperty } from "@nestjs/swagger";

export class HttpExceptionDto{
    @ApiProperty()
    status: number;
    @ApiProperty()
    message: string;
}