import { ApiProperty } from "@nestjs/swagger";

export class ActorIdDto{
    @ApiProperty({ description: 'id актера'})
    actorId: number;
}