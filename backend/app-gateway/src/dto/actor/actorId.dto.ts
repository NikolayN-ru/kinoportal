import { ApiProperty } from "@nestjs/swagger";

export class ActorIdDto{
    @ApiProperty()
    actorId: number;
}