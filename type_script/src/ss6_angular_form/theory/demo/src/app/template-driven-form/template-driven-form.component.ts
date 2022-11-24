import {Component, OnInit} from '@angular/core';
import {Student} from "../../models/Student";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  student: Student = {name: "", point: 0, gender: 0}  // tạo newStudent() trong Get ( tạo đối tượng rỗng để hứng dữ liệu từ Form)


  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmitForm(studentForm: NgForm) {
    if (studentForm.valid) {  /* valid : Kiểm tra xem Form có thỏa điều kiện validate hay không */
      console.log(this.student);
    }
  }
}
