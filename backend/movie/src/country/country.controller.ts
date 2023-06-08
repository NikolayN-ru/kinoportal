import { Controller } from '@nestjs/common';
import {EventPattern} from "@nestjs/microservices";
import {CountryService} from "./country.service";
import {UpdateCountryDto} from "./dto/update-country.dto";

@Controller('country')
export class CountryController {

    constructor(private countryService: CountryService) {}

    @EventPattern('create.country')
    createCountry(country: string) {
        return this.countryService.createCountry(country);
    }

    @EventPattern('delete.country')
    deleteCountry(id: number) {
        return this.countryService.deleteCountry(id);
    }

    @EventPattern('update.country')
    updateCountry(dto: UpdateCountryDto) {
        return this.countryService.updateCountry(dto.id, dto.country);
    }

    @EventPattern('get.all.countries')
    getAllGenres() {
        return this.countryService.getAllCountries();
    }
}
