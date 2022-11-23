import { Injectable } from '@angular/core';
import {Student} from "../models/Student";

//Injectable : phạm vi sử dụng DI để import Service này vào (root: sử dụng toàn ứng dụng)
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  //_students: '_' dùng trong nội bộ
  private _students: Student[] = [
    {name: "Nguyễn Văn A", gender: 0, point: 100},
    {name: "Nguyễn Văn B", gender: 1, point: 90},
    {name: "Nguyễn Văn C", gender: 2, point: 80},
    {name: "Nguyễn Văn D", gender: 0, point: 0}
  ]

  constructor() { }


  get students(): Student[] {
    return this._students;
  }

  set students(value: Student[]) {
    this._students = value;
  }

  save(student:Student){
    this._students.unshift(student);
  }
}
