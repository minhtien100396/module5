import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ContentComponent} from "./home/content/content.component";
import {ListComponent} from "./facility/list/list.component";
import {ListCustomerComponent} from "./customer/list-customer/list-customer.component";
import {ListContractComponent} from "./contract/list-contract/list-contract.component";
import {AddComponent} from "./facility/add/add.component";
import {AddCustomerComponent} from "./customer/add-customer/add-customer.component";
import {AddContractComponent} from "./contract/add-contract/add-contract.component";

const routes: Routes = [
  {path: 'home', component: ContentComponent},
  {path: 'facility/list', component: ListComponent},
  {path: 'facility/create', component: AddComponent},
  {path: 'customer/list', component: ListCustomerComponent },
  {path: 'customer/create', component: AddCustomerComponent },
  {path: 'contract/list', component: ListContractComponent },
  {path: 'contract/create', component: AddContractComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
