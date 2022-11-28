import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _mess: string;


  private _products: Product[] = [];

  constructor(private _httpClient: HttpClient) {
  }


  getListProducts(): Observable<Product[]> {
    return this._httpClient.get<Product[]>(environment.API_URL_PRODUCTS);
  }

  setProducts(value: Product[]) {
    this._products = value;
  }


  get mess(): string {
    return this._mess;
  }

  setMess(value: string) {
    this._mess = value;
  }

  save(product: Product): Observable<Product> {
    return this._httpClient.post<Product>(environment.API_URL_PRODUCTS, product);
  }

  findById(id: number): Observable<Product> {
    return this._httpClient.get<Product>(environment.API_URL_PRODUCTS + '/' + id);
  }

  remove(id: number): Observable<void> {
    return this._httpClient.delete<void>(environment.API_URL_PRODUCTS + '/' + id);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this._httpClient.put<Product>(environment.API_URL_PRODUCTS + '/' + id, product);
  }
}
