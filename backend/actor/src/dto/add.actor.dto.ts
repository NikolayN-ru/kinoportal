import { ApiProperty } from "@nestjs/swagger";

export class AddActorDto{
    @ApiProperty()
    firstName:string;
    @ApiProperty()
    lastName:string;
    @ApiProperty({required: false})
    story:string;
    @ApiProperty({required: false})
    biography:string;
    @ApiProperty({required: false})
    photo: string;
}