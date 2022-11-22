import {Component} from '@angular/core';
import {Student} from "../models/Student";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'theory';

  students: Student[] = [
    {name: "Nguyễn Văn A", gender: 0, point: 100},
    {name: "Nguyễn Văn B", gender: 1, point: 90},
    {name: "Nguyễn Văn C", gender: 2, point: 80},
    {name: "Nguyễn Văn D", gender: 0, point: 0}
  ]
}
