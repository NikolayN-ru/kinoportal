import {HttpStatus, Injectable} from '@nestjs/common';
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
             const country =  await this.countryRepository.delete({
                id: id
            });
             if(!country) return HttpStatus.NOT_FOUND;
             return country;
        } catch (e) {
            return e.message;
        }
    }

    async updateCountry(id: number, country: string) {
        try {
            const updatedCountry =  await this.countryRepository.save({
                id: id,
                country: country
            });
            if(!updatedCountry) return HttpStatus.NOT_FOUND;
            return updatedCountry;
        } catch (e) {
            return e.message;
        }
    }
}
