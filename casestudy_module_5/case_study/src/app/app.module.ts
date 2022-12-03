import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from "./home/header/header.component";
import {NavbarComponent} from './home/navbar/navbar.component';
import {ContentComponent} from './home/content/content.component';
import {FooterComponent} from './home/footer/footer.component';
import {ListComponent} from './facility/list/list.component';
import {EditComponent} from './facility/edit/edit.component';
import {AddComponent} from './facility/add/add.component';
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';
import {EditCustomerComponent} from './customer/edit-customer/edit-customer.component';
import {AddCustomerComponent} from './customer/add-customer/add-customer.component';
import {ListContractComponent} from './contract/list-contract/list-contract.component';
import {AddContractComponent} from './contract/add-contract/add-contract.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from "ngx-pagination";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ContentComponent,
    FooterComponent,
    ListComponent,
    EditComponent,
    AddComponent,
    ListCustomerComponent,
    EditCustomerComponent,
    AddCustomerComponent,
    ListContractComponent,
    AddContractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
