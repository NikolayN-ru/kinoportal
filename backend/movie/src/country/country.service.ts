import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Country} from "./entity/country.entity";

@Injectable()
export class CountryService {
    constructor(@InjectRepository(Country) private countryRepository: Repository<Country>) {}

    async createCountry(countryName: string) {
        try {
            const country = await this.countryRepository.findOneBy({
                country: countryName
            })
            if(country) throw new HttpException('Такая страна уже есть', HttpStatus.BAD_REQUEST);

            const newCountry = new Country();
            newCountry.country = countryName;

            return await this.countryRepository.save(newCountry);
        } catch (e) {
            return {
                status: e.status,
                message: e.message
            };
        }
    }

    async deleteCountry(id: number) {
        try {
            const country =  await this.countryRepository.delete({
                id: id
            });
            if(!country.affected) return HttpStatus.NOT_FOUND;
            return 'Страна уделена';
        } catch (e) {
            return {
                status: e.status,
                message: e.message
            };
        }
    }

    async updateCountry(id: number, country: string) {
        try {
            const duplicatedCountry = await this.countryRepository.findOneBy({
                country: country
            })
            if(duplicatedCountry) throw new HttpException('Такая страна уже есть', HttpStatus.BAD_REQUEST);

            const updatedCountry = await this.countryRepository.findOneBy({
                id: id,
            });
            if(!updatedCountry) return HttpStatus.NOT_FOUND;

            updatedCountry.country = country;
            await this.countryRepository.save(updatedCountry);

            return updatedCountry;
        } catch (e) {
           return {
                status: e.status,
                message: e.message
            };
        }
    }
}
