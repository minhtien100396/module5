import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../../service/customer.service";
import {ICustomer} from "../../../model/ICustomer";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customerList: ICustomer[] | undefined;

  constructor(private _customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.customerList = this._customerService.customerList;
  }

}
