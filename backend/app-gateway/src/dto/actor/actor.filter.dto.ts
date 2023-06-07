import { ApiProperty } from "@nestjs/swagger";

export class ActorFilterDto{
    @ApiProperty({ description: 'фамилия'})
    fio: string;
}