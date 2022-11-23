import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Student} from "../../models/Student";


@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

    @Output('newStudent') onCreate = new EventEmitter<Student>();
    @Output('mess') onCreate1 = new EventEmitter<string>();


  student: Student | undefined;


  constructor() {
  }

  ngOnInit(): void {
  }

  createStudent(name: string, gender: string, point: string) {
    this.student = {name: name, gender: parseInt(gender), point: parseInt(point)};
    console.log(this.student);
    this.onCreate.emit(this.student);
  }

  showMessz(){
    this.onCreate1.emit("Thêm Thành Công");
  }
}
