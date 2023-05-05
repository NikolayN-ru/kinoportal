import { Controller } from '@nestjs/common';
import {EventPattern} from "@nestjs/microservices";
import {CountryService} from "./country.service";

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
    updateCountry(id: number, country: string) {
        return this.countryService.updateCountry(id, country);
    }

}
