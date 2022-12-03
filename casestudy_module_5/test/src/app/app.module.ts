import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StudentListComponent} from './student/student-list/student-list.component';
import {HeaderComponent} from './home/header/header.component';
import {FooterComponent} from './home/footer/footer.component';
import {NgxPaginationModule} from "ngx-pagination";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {StudentCreateComponent} from './student/student-create/student-create.component';
import {StudentDeleteComponent} from './student/student-delete/student-delete.component';
import {StudentEditComponent} from './student/student-edit/student-edit.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    HeaderComponent,
    FooterComponent,
    StudentCreateComponent,
    StudentDeleteComponent,
    StudentEditComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
