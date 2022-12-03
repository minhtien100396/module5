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
import {ClassService} from "../../../service/class.service";
import {Class} from "../../../model/class";
import {StudentService} from "../../../service/student.service";
import {Student} from "../../../model/student";
import {Router} from "@angular/router";
import {log} from "util";

export const check: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const dateOfBirth = control.get("dateOfBirth");
  const today = new Date().getFullYear();
  const age = today - new Date(dateOfBirth.value).getFullYear();
  if (age < 18 || age > 100) {
    return {"checkAgeStudent": true};
  } else {
    return null;
  }
}

// export const addressOption: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
//   const addressOption = control.get('addressOption').value.join('');
//   console.log(control.get('addressOption').value);
//   if(addressOption.length < 1) {
//     return {'addressOption': true}
//   }
//   return  null;
// }

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  rfStudent: FormGroup;
  classList: Class[];
  student: Student;
  studentList: Student[];


  constructor(private _formBuilder: FormBuilder,
              private _classService: ClassService,
              private _studentService: StudentService,
              private _router: Router) {
  }

  ngOnInit(): void {
    this._classService.getListClass().subscribe(
      data => {
        this.classList = data;
        this._studentService.getListStudent().subscribe(
          data => {
            this.studentList = data;

            this.rfStudent = this._formBuilder.group({
              id: [],
              name: ['',
                [
                  Validators.required,
                  Validators.pattern('^[A-ZÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ](?:\'[A-ZÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ])*[a-zàáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹý]*(?: [A-ZÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ](?:\'[A-ZÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ])*[a-zàáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹý]*)*$')
                ]
              ],
              gender: [, [Validators.required]],
              point: [, [
                Validators.required,
                Validators.pattern('^[0-9][0-9]?$|^100$')
              ]],
              address: [,
                [
                  Validators.required,
                  Validators.pattern('^[A-Za-z0-9àáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ(,)(/) ]{2,45}$')
                ]
              ],
              addressOption: this._formBuilder.array([''],[Validators.required]),
              dateOfBirth: [,
                [
                  Validators.required
                ]
              ],
              class: ['', [Validators.required]]
            }, {validators: [check, this.checkName]});
          });
      });


  }

  onSubmit() {
    this._studentService.add(this.rfStudent.value).subscribe(
      data => {
        this.student = data;
        this._studentService.setMess('Add New ' + this.student.name + ' success!');
        this._router.navigateByUrl('');
      }
    )
  }

  checkName: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const name = control.get("name");
    let result = null;
    this.studentList.forEach(value => {
      if (name.value === value.name) {
        result = {"nameUnique": true};
      }
    });
    return result;
  }

  get addressOption() {
    return this.rfStudent.controls['addressOption'] as FormArray;
  }

  addAddressOption() {
    this.addressOption.push(this._formBuilder.control(''));
  }

  deleteAddressOption() {
    // @ts-ignore
    this.addressOption.removeAt(this._formBuilder.control(''));
  }

  clearAllAddressOption() {
    // @ts-ignore
    this.addressOption.clear(this._formBuilder.control(''));

  }

  show() {
    console.log(this.rfStudent.value);
  }
}
