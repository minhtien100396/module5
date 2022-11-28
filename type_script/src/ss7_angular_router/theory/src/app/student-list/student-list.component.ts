import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { Student } from 'src/models/Student';
import { StudentService } from 'src/service/student.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit, OnDestroy {

  student: Student | undefined;
  students: Student[] | undefined;

  /*DI*/
  private subscription:Subscription | undefined;
  constructor(private _studentService: StudentService,
              private _router: Router) {
  }

  ngOnInit(): void {
    this.subscription = this._studentService.getAllStudents().subscribe(
      data => {  /*tương ứng với then : thành công*/
        this.students = data;
      }, error => { /*tương ứng với catch : thất bại*/
        console.log('Lấy dữ liệu sinh viên thất bại')
      }
      // ,() => { /*tương ứng với finally: thất bại hay thành công đều thực hiện*/
      //
      // }
      );
  }

  gotoDetail(i: number) {
    /*Thay đổi đường dẫn có tham số*/
    this._router.navigate(['/detail', i]);
  }

  ngOnDestroy(): void {
    if (this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
