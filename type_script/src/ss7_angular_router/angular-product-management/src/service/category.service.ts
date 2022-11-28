import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../model/category";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _httpClient:HttpClient) { }

  getAllCategorys():Observable<Category[]>{
    return this._httpClient.get<Category[]>(environment.API_URL_CATEGORYS);
  }

  findCategoryById(cateId: number) :Observable<Category> {
    return this._httpClient.get(environment.API_URL_CATEGORYS + '/' + cateId);
  }
}
