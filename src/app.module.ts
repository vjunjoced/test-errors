import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsRepository } from './repository/products.repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ProductsRepository],
})
export class AppModule {}
