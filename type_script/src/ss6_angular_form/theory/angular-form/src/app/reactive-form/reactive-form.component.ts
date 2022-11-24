import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  rfStudent: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.rfStudent = this._formBuilder.group({
      name: ['Bùi Minh Tiến',
        [
        Validators.required,
        Validators.minLength(5)
        ]
      ],
      point: [90,[
        Validators.required,
        Validators.minLength(5)
      ]],
      address: [],
      password: [],
      confirmPassword: []
    })
  }

  onSubmit() {
    /*Để lấy từng giá trị tại ô input khai báo #name*/
    // console.log(this.rfStudent.value.name);

    /*Lấy toàn bộ thông tin của đối tượng*/
    console.log(this.rfStudent.value);
  }
}
