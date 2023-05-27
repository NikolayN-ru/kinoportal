import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Country} from "./entity/country.entity";
import {CountryController} from "./country.controller";
import {CountryService} from "./country.service";

@Module({
    controllers: [CountryController],
    providers: [CountryService],
    imports: [
        TypeOrmModule.forFeature([Country]),

    ],
    exports:[
        CountryService
    ]
})
export class CountryModule {}
