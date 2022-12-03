import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {StudentService} from "../../../service/student.service";
import {Student} from "../../../model/student";

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit {
  studentId: number;
  private student: Student;

  constructor(private _activatedRoute: ActivatedRoute,
              private _studentService: StudentService,
              private _router: Router) {
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((param: Params) => {
      this.studentId = param.id;
      this._studentService.findById(this.studentId).subscribe(
        data => {
          this.student = data;
          this._studentService.delete(this.studentId).subscribe(
            () => {
              this._studentService.setMess('Delete ' + this.student.name + ' success!');
              this._router.navigateByUrl('');
            })
        })
    })
  }

}
