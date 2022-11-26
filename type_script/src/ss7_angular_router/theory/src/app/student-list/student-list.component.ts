import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { Student } from 'src/models/Student';
import { StudentService } from 'src/service/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  student: Student | undefined;
  students: Student[] | undefined;

  /*DI*/
  constructor(private _studentService: StudentService,
              private _router: Router) {
  }

  ngOnInit(): void {
    this.students = this._studentService.students;
  }

  gotoDetail(i: number) {
    /*Thay đổi đường dẫn có tham số*/
    this._router.navigate(['/detail', i]);
  }
}
