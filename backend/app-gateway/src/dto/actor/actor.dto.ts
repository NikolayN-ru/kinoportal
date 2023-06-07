import { ApiProperty } from "@nestjs/swagger";
import { MovieDto } from "../movie/movie.dto";

export class ActorDto{
    @ApiProperty({ description: 'id актера'})
    actorId: number;
    @ApiProperty({ description: 'имя'})
    firstName:string;
    @ApiProperty({ description: 'фамилия'})
    lastName:string;
    @ApiProperty({ description: 'история'})
    story:string;
    @ApiProperty({ description: 'биография'})
    biography:string;

    @ApiProperty({ description: 'количество фильмов'})
    countfilms: number;

    @ApiProperty({ description: 'фотокарточка'})
    image: string
}


export class ActorWitMovie{
    @ApiProperty({ description: 'актер'})
    actor: ActorDto
    
    @ApiProperty({ description: 'фильмы'})
    movie: Array<MovieDto>
}