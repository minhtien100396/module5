import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../../service/student.service";
import {ClassService} from "../../../service/class.service";
import {Student} from "../../../model/student";
import {Class} from "../../../model/class";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  rfSearch: FormGroup;
  studentList: Student[];
  classList: Class[];
  p: number = 1;
  count: number = 3;
  message: string;
  student: Student;
  studentDelete: Student;
  searchDayOfBirthFrom = '';
  searchDayOfBirthTo = '';


  constructor(private _studentService: StudentService,
              private _classServeice: ClassService,
              private _formBuilder: FormBuilder,
              private _router: Router) {
  }

  ngOnInit(): void {
    this._studentService.getListStudent().subscribe(
      data => {
        this.studentList = data;
      });


    this._classServeice.getListClass().subscribe(
      data => {
        this.classList = data;
      });


    this.rfSearch = this._formBuilder.group({
      name: [''],
      class: [''],
      searchDayOfBirthFrom: [this.searchDayOfBirthFrom],
      searchDayOfBirthTo: [this.searchDayOfBirthTo]
    });

    this.message = this._studentService.message;

  }

  onSearch() {
    this._studentService.search(this.rfSearch.value).subscribe(
      data => {
        this.studentList = data.filter(value => {
          const dateOfBirth = new Date(value.dateOfBirth);
          let dateOfBirthFrom = new Date(this.searchDayOfBirthFrom);
          let dateOfBirthTo = new Date(); /*Ngày hiên tại*/

          if (this.searchDayOfBirthTo) {
            dateOfBirthTo = new Date(this.searchDayOfBirthTo);
          }
          if (!this.searchDayOfBirthFrom && dateOfBirth.getTime() < dateOfBirthTo.getTime()) {
            console.log('vô đây');
            return data;
          }
          if (dateOfBirth.getTime() > dateOfBirthFrom.getTime() && dateOfBirth.getTime() < dateOfBirthTo.getTime()) {
            console.log('vô nè');
            return data;
          }
        });
      }
    )
  }

  sendToDetailModal(id: number) {
    this._studentService.findById(id).subscribe(
      data => {
        this.student = data;
      }
    )
  }

  getStudent(id: number) {
    this._studentService.findById(id).subscribe(
      data => {
        this.studentDelete = data;
      }
    )
  }

  onDelete() {
    this._studentService.delete(this.studentDelete.id).subscribe(
      () => {
        this._studentService.setMess('Delete ' + this.studentDelete.name + ' success!');
        this.message = this._studentService.getMess();
        this.ngOnInit();
      })
  }
}
