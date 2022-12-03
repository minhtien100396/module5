import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Class} from "../model/class";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private _httpClient: HttpClient) {
  }

  getListClass(): Observable<Class[]> {
    return this._httpClient.get<Class[]>(environment.API_URL_CLASS);
  }

  findClassById(classId: number): Observable<Class> {
    return this._httpClient.get<Class>(environment.API_URL_CLASS + '/' + classId);
  }
}
