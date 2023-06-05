import { ApiProperty } from "@nestjs/swagger";

export class ActorFilterDto{
    @ApiProperty()
    fio: string;
}