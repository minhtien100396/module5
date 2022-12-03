import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../../service/customer.service";
import {ICustomer} from "../../../model/ICustomer";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  title = 'Angular Pagination Tutorial';
  // Some array of things.
  customerList: ICustomer[] | undefined;
  // Pagination parameters.
  p: number = 1;
  count: number = 5;

  constructor(private _customerService: CustomerService) {
  }

  ngOnInit(): void {
    this._customerService.getCustomerList().subscribe(
      data => {
        this.customerList = data;
      }
    )
  }

}
