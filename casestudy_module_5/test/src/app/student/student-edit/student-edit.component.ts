import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {StudentService} from "../../../service/student.service";
import {Student} from "../../../model/student";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ClassService} from "../../../service/class.service";
import {Class} from "../../../model/class";

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  studentId: number | undefined;
  studentEdit: Student | undefined;
  rfStudent: FormGroup | undefined;
  classList: Class[] | undefined;
  classId: number | undefined;

  constructor(private _activatedRoute: ActivatedRoute,
              private _studentService: StudentService,
              private _classService: ClassService,
              private _formBuilder: FormBuilder,
              private _router: Router) {
  }

  ngOnInit(): void {
    this._classService.getListClass().subscribe(
      data => {
        this.classList = data;
      });
    this._activatedRoute.params.subscribe((param: Params) => {
      this.studentId = param['id'];
      this._studentService.findById(this.studentId).subscribe(
        data => {
          this.studentEdit = data;
          this.rfStudent = this._formBuilder.group({
            id: [this.studentEdit.id],
            name: [this.studentEdit.name],
            gender: [this.studentEdit.gender],
            point: [this.studentEdit.point],
            address: [this.studentEdit.address],
            dateOfBirth: [this.studentEdit.dateOfBirth],
            class: [this.studentEdit.class.id]
          });
        });


    })
  }

  onEdit() {
    if (this.rfStudent.valid) {
      this.classId = this.rfStudent.value.class;
      this._classService.findClassById(this.rfStudent.value.class).subscribe(
        classData => {
          this.rfStudent.value.class = classData;
          this._studentService.edit(this.studentId, this.rfStudent.value).subscribe(
            data => {
              this.studentEdit = data;
              this._studentService.setMess('Edit Student: ' + this.studentEdit.name + ' success!');
              this._router.navigateByUrl('');
            }
          )
        }
      )
    }

  }
}
