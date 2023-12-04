import { Controller, Get, UseFilters } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductExceptionFilter } from './pipe-errors/errors-service.filter';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseFilters(ProductExceptionFilter)
  getHello(): string {
    return this.appService.getProduct();
  }
}
