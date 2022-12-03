import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentListComponent} from "./student/student-list/student-list.component";
import {StudentCreateComponent} from "./student/student-create/student-create.component";
import {StudentDeleteComponent} from "./student/student-delete/student-delete.component";
import {EditCustomerComponent} from "../../../case_study/src/app/customer/edit-customer/edit-customer.component";
import {StudentEditComponent} from "./student/student-edit/student-edit.component";


const routes: Routes = [
  {path:'',component:StudentListComponent},
  {path:'student/create',component:StudentCreateComponent},
  {path:'student/delete/:id',component:StudentDeleteComponent},
  {path:'student/edit/:id',component:StudentEditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
