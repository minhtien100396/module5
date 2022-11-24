import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rfLogin: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.rfLogin = this._formBuilder.group({
      email: ['minhtien123@gmail.com',
        [
          Validators.email,
          Validators.required
        ]
      ],
      password:['123456',
        [Validators.minLength(6)]
      ]
    })
  }

}
