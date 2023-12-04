import { Injectable } from '@nestjs/common';
import { ErrorRepo } from './error_repo';

@Injectable()
export class ProductsRepository {
  getProduct(): string {
    try {
      console.log('init get product');
      // throw 'error';
      return 'product_1';
    } catch (error) {
      throw new ErrorRepo('repo_error_getProduct', null);
    }
  }

  updatePrice(): string {
    try {
      console.log('init update price');
      // throw 'error';
      return 'price_updated';
    } catch (error) {
      throw new ErrorRepo('repo_error_updatePrice', null);
    }
  }
}
