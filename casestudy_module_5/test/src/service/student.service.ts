import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../model/student";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  message: string;

  constructor(private _httpClient: HttpClient) {
  }

  getListStudent(): Observable<Student[]> {
    return this._httpClient.get<Student[]>(environment.API_URL_STUDENTS);
  }

  search(rfSearch: any): Observable<Student[]> {
    if (!rfSearch.class) {
      return this._httpClient.get<Student[]>(environment.API_URL_STUDENTS +
        "?name_like=" + rfSearch.name);
    }
    return this._httpClient.get<Student[]>(environment.API_URL_STUDENTS +
      "?name_like=" + rfSearch.name +
      "&class.id=" + rfSearch.class);
  }

  add(student: Student): Observable<Student> {
    return this._httpClient.post<Student>(environment.API_URL_STUDENTS, student);
  }

  delete(id: number): Observable<void> {
    return this._httpClient.delete<void>(environment.API_URL_STUDENTS + '/' + id);
  }

  setMess(mess: string) {
    this.message = mess;
  }

  getMess() {
    return this.message;
  }

  findById(studentId: number): Observable<Student> {
    return this._httpClient.get<Student>(environment.API_URL_STUDENTS + '/' + studentId);
  }

  edit(studentId: number, student: Student): Observable<Student> {
    return this._httpClient.put<Student>(environment.API_URL_STUDENTS + '/' + studentId, student);
  }
}
