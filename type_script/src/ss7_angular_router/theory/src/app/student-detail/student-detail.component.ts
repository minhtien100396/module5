import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import { Student } from 'src/models/Student';
import {StudentService} from "../../service/student.service";

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  index: number;
  constructor(private _activatedRoute: ActivatedRoute,
              private _studentService: StudentService) {
  }

  studentDetail: Student | undefined;

  ngOnInit(): void {
    /*Không xử lý được  bất đồng bộ*/
    // let studentIndex = this._activatedRoute.snapshot.params['index'];
    // console.log("index của student:" + studentIndex);
    // this.studentDetail = this._studentService.getFindByIndex(studentIndex);
    //
    /*Tối ưu hơn vì xử lý được bất đồng bộ*/
    this._activatedRoute.params.subscribe((params: Params) => {
      this.index = params['index'];
      this.studentDetail = this._studentService.getFindByIndex(this.index);
    })
  }

}
