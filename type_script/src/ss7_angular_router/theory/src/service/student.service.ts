import {Injectable} from '@angular/core';
import {Student} from '../models/Student';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private API_URL = 'http://localhost:3000/students';

  constructor(private _httpClient: HttpClient) {
  }

  // private _students: Student[] = [
  //   {id: 1, name: 'Nguyễn Văn A', gender: 0, point: 100},
  //   {id: 2, name: 'Nguyễn Văn B', gender: 1, point: 90},
  //   {id: 3, name: 'Nguyễn Văn C', gender: 2, point: 80},
  //   {id: 4, name: 'Nguyễn Văn D', gender: 0, point: 0}
  // ];


  /*Lấy danh sách*/

  // @ts-ignore
  getAllStudents(): Observable<Student[]> {
    return this._httpClient.get<Student[]>(this.API_URL);
  }

  // set students(value: Student[]) {
  //   this._students = value;
  // }

  save(student: Student):Observable<Student> {
    return this._httpClient.post<Student>(this.API_URL,student);
  }

  // getFindByIndex(index: number) {
  //   return this._students[index];
  // }
}
