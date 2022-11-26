import {Injectable} from '@angular/core';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _products: Product[] = [{
    id: 1,
    name: 'IPhone 12',
    price: 2400000,
    description: 'New'
  }, {
    id: 2,
    name: 'IPhone 11',
    price: 1560000,
    description: 'Like new'
  }, {
    id: 3,
    name: 'IPhone X',
    price: 968000,
    description: '97%'
  }, {
    id: 4,
    name: 'IPhone 8',
    price: 7540000,
    description: '98%'
  }, {
    id: 5,
    name: 'IPhone 11 Pro',
    price: 1895000,
    description: 'Like new'
  }];

  constructor() {
  }


  get products(): Product[] {
    return this._products;
  }

  set products(value: Product[]) {
    this._products = value;
  }

  save(product: Product) {
    this._products.unshift(product);
  }

  findById(id: number) {
    return this._products.find(value => parseInt(id + '') === value.id);
  }

  remove(product: Product) {
    const index = this._products.indexOf(product);
    this._products.splice(index, 1);
  }

}
