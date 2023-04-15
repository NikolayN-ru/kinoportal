import { ApiProperty } from "@nestjs/swagger";

export class ActorDto{
    @ApiProperty()
    actorId: number;
    @ApiProperty({required: false})
    firstName:string;
    @ApiProperty({required: false})
    lastName:string;
    @ApiProperty({required: false})
    story:string;
    @ApiProperty({required: false})
    biography:string;
    @ApiProperty({required: false})
    photo: string;
}