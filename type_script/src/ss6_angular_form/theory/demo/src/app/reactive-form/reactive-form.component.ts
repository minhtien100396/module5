import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  rfStudent:FormGroup;

  constructor(private _formBuilder: FormBuilder) { } /*DÙng Form Group ko cần DI*/

  ngOnInit(): void {
    /*Sử dụng Form Builder*/
    this.rfStudent = this._formBuilder.group({
      studentName: ["Anh", [Validators.required,Validators.minLength(5)]],
      studentGender: [1],
      studentPoint: [90]
    })

    /*Sử dụng Form Group*/
    // this.rfStudent = new FormGroup({
    //   studentName : new FormControl("ANh"),
    //   studentGender : new FormControl(0),
    //   studentPoint : new FormControl("90")
    // })
  }

  onSubmit() {
    console.log(this.rfStudent.value.studentName); /*lấy ra name*/
    console.log(this.rfStudent.value); /*lấy toàn bộ*/
  }
}
