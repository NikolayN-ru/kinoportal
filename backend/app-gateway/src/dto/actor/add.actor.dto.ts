import { ApiProperty } from "@nestjs/swagger";

export class AddActorDto{
    @ApiProperty({ description: 'имя'})
    firstName:string;
    @ApiProperty({ description: 'фамилия'})
    lastName:string;
    @ApiProperty({required: false, description: 'история'})
    story:string;
    @ApiProperty({required: false, description: 'биография'})
    biography:string;
}

export class AddActorDtoWithImage{
    @ApiProperty({ description: 'актер'})
    actor: AddActorDto

    @ApiProperty({required: false, description: 'фотография'})
    image: any
}