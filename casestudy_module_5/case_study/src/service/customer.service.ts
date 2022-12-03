import {Injectable} from '@angular/core';
import {ICustomer} from "../model/ICustomer";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private _customerList:ICustomer[] = []

  constructor(private _httpClient:HttpClient) {
  }


  getCustomerList(): Observable<ICustomer[]> {
    return this._httpClient.get<ICustomer[]>(environment.API_URL_CUSTOMERS);
  }

}
