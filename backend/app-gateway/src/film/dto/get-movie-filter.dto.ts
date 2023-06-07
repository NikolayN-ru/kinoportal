import {Query} from "@nestjs/common";

export class getMovieFilerDto {
    year?: number;
    genre?: string;
     rating?: number;
     country?: string;
    votes?: number;
    actor?: string;
     director?: string;
     sort?: string;
}