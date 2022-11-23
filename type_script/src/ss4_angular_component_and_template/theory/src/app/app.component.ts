import {Component, OnInit} from '@angular/core';
import {Student} from "../models/Student";
import {StudentService} from "../service/student.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'theory';

  student: Student | undefined;
  mess: string | undefined;
  students: Student[] | undefined;

  /*DI*/
  constructor(private _studentService: StudentService) {
  }

  ngOnInit(): void {
    this.students = this._studentService.students;
  }

  // students: Student[] = [
  //   {name: "Nguyễn Văn A", gender: 0, point: 100},
  //   {name: "Nguyễn Văn B", gender: 1, point: 90},
  //   {name: "Nguyễn Văn C", gender: 2, point: 80},
  //   {name: "Nguyễn Văn D", gender: 0, point: 0}
  // ]

  showDetail(item: Student) {
    this.student = item;
  }

  getNewStudent(value: Student) {
    // this.students.unshift(value);
    this._studentService.save(value);
  }

  getMs(mess: string) {
    this.mess = mess;
  }


}
