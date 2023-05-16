import { ApiProperty } from "@nestjs/swagger";

export class ActorDto{
    @ApiProperty()
    actorId: number;
    @ApiProperty()
    firstName:string;
    @ApiProperty()
    lastName:string;
    @ApiProperty()
    story:string;
    @ApiProperty()
    biography:string;
}

export class ActorWithImageDto{
    @ApiProperty()
    actorDto: ActorDto
    @ApiProperty()
    image: any
}