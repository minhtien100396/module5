import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {StudentService} from '../../service/student.service';
import {Subscription} from "rxjs";


@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  rfStudent: FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private _router: Router,
              private _studentService: StudentService) {
  } /*DÙng Form Group ko cần DI*/

  ngOnInit(): void {
    /*Sử dụng Form Builder*/
    this.rfStudent = this._formBuilder.group({
      name: [[''], [Validators.required, Validators.minLength(5)]],
      gender: [],
      point: []
    })
  }

  onSubmit() {
    // console.log(this.rfStudent.value.studentName); /*lấy ra name*/
    console.log(this.rfStudent.value); /*lấy toàn bộ*/
    if (this.rfStudent.valid) {
       this._studentService.save(this.rfStudent.value).subscribe(
        data => {
          console.log(data);
          /*Thay đổi đường dẫn không có tham số*/
          this._router.navigateByUrl('/home');
        });
    }
  }
}

