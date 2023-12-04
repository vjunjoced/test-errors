import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './repository/products.repository';
import { ErrorRepo } from './repository/error_repo';
import { ErrorService } from './error_service';

@Injectable()
export class AppService {
  constructor(private repo: ProductsRepository) {}

  getProduct(): string {
    try {
      return this.repo.getProduct();
    } catch (error) {
      if (
        error instanceof ErrorRepo &&
        error.message === 'repo_error_getProduct'
      ) {
        throw new ErrorService('service_error_getProduct', error);
      }

      throw new Error(error.message);
    }
  }

  updatePrice(): string {
    try {
      return this.repo.updatePrice();
    } catch (error) {
      if (
        error instanceof ErrorRepo &&
        error.message === 'error_update_price'
      ) {
        throw new ErrorService('error_update_price', error);
      }

      throw new Error(error.message);
    }
  }
}
