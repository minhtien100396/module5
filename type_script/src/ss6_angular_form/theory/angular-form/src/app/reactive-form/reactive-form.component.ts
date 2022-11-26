import {Component, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";

export const reConfirmPass: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const passWord = control.get("password");
  const confirmPassword = control.get("confPassword");
  if (passWord && confirmPassword && passWord.touched && passWord.value != confirmPassword.value) {
    return {"reConfirmPassValidName": true};
  } else {
    return null;
  }
}
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
      address_option: this._formBuilder.array([]),
      password: [],
      confPassword: []
    }, {validators: reConfirmPass})
  }

  onSubmit() {
    /*Để lấy từng giá trị tại ô input khai báo #name*/
    // console.log(this.rfStudent.value.name);

    /*Lấy toàn bộ thông tin của đối tượng*/
    console.log(this.rfStudent.value);
  }

  get address_option(){
    return this.rfStudent.controls['address_option'] as FormArray;
  }

  addAddressOption(){
    this.address_option.push(this._formBuilder.control(''));
  }

  deleteAddressOption() {
    // @ts-ignore
    this.address_option.removeAt(this._formBuilder.control(''));
  }

  clearAllAddressOption() {
    // @ts-ignore
    this.address_option.clear(this._formBuilder.control(''));

  }
}
