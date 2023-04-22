import {Controller, Get, Param} from '@nestjs/common';
import {AppService} from "./app.service";

@Controller('')
export class AppController {

    constructor(private appService: AppService) {}

    @Get('/')
    getMain() {
        return this.appService.getMain();
    }


}
