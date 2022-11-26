import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StudentListComponent} from "./student-list/student-list.component";
import {StudentCreateComponent} from "./student-create/student-create.component";
import {StudentDetailComponent} from "./student-detail/student-detail.component";

/*
* /home : hiển thị trang list
* /create: hiển thị trang tạo mới
*/
/*routes: là biến chứa đường dẫn*/
const routes: Routes = [
  {path: "home", component: StudentListComponent},
  {path: "create", component: StudentCreateComponent},
  {path: "detail/:index", component: StudentDetailComponent}
];

/*Khai báo URL pattern nào matching với component nào*/
@NgModule({
  /*forRoot: Những routing ở trên home ,create sẽ được áp dụng cho root module*/
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
