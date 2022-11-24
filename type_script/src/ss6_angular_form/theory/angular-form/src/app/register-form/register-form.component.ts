import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";

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
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  rfRegister: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.rfRegister = this._formBuilder.group({
      email: ['minhtien100396@gmail.com',
        [
          Validators.required,
          Validators.email
        ]
      ],
      phone: ['+84931104763',
        [
          Validators.required,
          Validators.pattern("[+84][0-9]\\d{9,10}")
        ]
      ],
      age: [20,
        [
          Validators.required,
          Validators.pattern("^0?(1[89]|[2-9]\\d)$")
        ]
      ],
      country: ['Huế',
        [
          Validators.required
        ]
      ],
      password: ['123456',
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ],
      confPassword: ['123456']
    }, {validators: reConfirmPass})
  }
}

