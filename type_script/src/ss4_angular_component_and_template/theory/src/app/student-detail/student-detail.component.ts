import {Component, Input, OnInit} from '@angular/core';
import {Student} from "../../models/Student";

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  constructor() { }

  @Input('inputStudent') studentDetail : Student | undefined;

  ngOnInit(): void {
  }

}
