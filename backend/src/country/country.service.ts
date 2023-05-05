import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Country} from "./entity/country.entity";

@Injectable()
export class CountryService {
    constructor(@InjectRepository(Country) private countryRepository: Repository<Country>) {}

    async createCountry(country: string) {
        try {
            const newCountry = new Country();
            newCountry.country = country;

            return await this.countryRepository.save(newCountry);
        } catch (e) {
            return e.message;
        }
    }

    async deleteCountry(id: number) {
        try {
             return await this.countryRepository.delete({
                id: id
            })
        } catch (e) {
            return e.message;
        }
    }

    async updateCountry(id: number, country: string) {
        try {
            return await this.countryRepository.save({
                id: id,
                country: country
            })
        } catch (e) {
            return e.message;
        }
    }
}
