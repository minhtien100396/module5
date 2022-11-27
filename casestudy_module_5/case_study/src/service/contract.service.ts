import {Injectable} from '@angular/core';
import {IContract} from "../model/IContract";

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private _ContractList: IContract[] = [{
    id:1,
    startDate:'2020-12-08',
    endDate:'2020-12-08',
    deposit:0,
    employeeId:3,
    customerId:1,
    facilityId:3,
    status:1
  },{
    id:2,
    startDate:'2020-07-14',
    endDate:'2020-07-21',
    deposit:200000,
    employeeId:7,
    customerId:3,
    facilityId:1,
    status:1
  },{
    id:3,
    startDate:'2021-03-15',
    endDate:'2021-03-17',
    deposit:50000,
    employeeId:3,
    customerId:4,
    facilityId:2,
    status:1
  },{
    id:4,
    startDate:'2021-01-14',
    endDate:'2021-01-18',
    deposit:100000,
    employeeId:7,
    customerId:5,
    facilityId:5,
    status:1
  },{
    id:5,
    startDate:'2021-07-14',
    endDate:'2021-07-15',
    deposit:0,
    employeeId:7,
    customerId:2,
    facilityId:6,
    status:1
  },{
    id:6,
    startDate:'2021-06-01',
    endDate:'2021-06-03',
    deposit:0,
    employeeId:7,
    customerId:7,
    facilityId:6,
    status:1
  },{
    id:7,
    startDate:'2021-09-02',
    endDate:'2021-09-05',
    deposit:100000,
    employeeId:7,
    customerId:4,
    facilityId:4,
    status:1
  },{
    id:8,
    startDate:'2021-06-17',
    endDate:'2021-06-18',
    deposit:150000,
    employeeId:3,
    customerId:4,
    facilityId:1,
    status:1
  },{
    id:9,
    startDate:'2020-11-19',
    endDate:'2020-11-19',
    deposit:0,
    employeeId:3,
    customerId:4,
    facilityId:3,
    status:1
  },{
    id:10,
    startDate:'2021-04-12',
    endDate:'2021-04-14',
    deposit:0,
    employeeId:10,
    customerId:3,
    facilityId:5,
    status:1
  },{
    id:11,
    startDate:'2021-04-25',
    endDate:'2021-04-25',
    deposit:0,
    employeeId:2,
    customerId:2,
    facilityId:1,
    status:1
  },{
    id:12,
    startDate:'2021-05-25',
    endDate:'2021-05-27',
    deposit:0,
    employeeId:7,
    customerId:10,
    facilityId:1,
    status:1
  }]

  constructor() {
  }


  get ContractList(): IContract[] {
    return this._ContractList;
  }

  set ContractList(value: IContract[]) {
    this._ContractList = value;
  }
}
