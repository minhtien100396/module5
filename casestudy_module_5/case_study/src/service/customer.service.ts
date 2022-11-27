import {Injectable} from '@angular/core';
import {ICustomer} from "../model/ICustomer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private _customerList:ICustomer[] = [{
    id:1,
    name:'Nguyễn Thị Hào',
    dateOfBirth:'1970-11-07',
    gender:0,
    idCard:'643431213',
    phone:'0945423362',
    email:'thihao07@gmail.com',
    address:'23 Nguyễn Hoàng, Đà Nẵng',
    customerTypeId:5,
    status:1
  },{
    id:2,
    name:'Phạm Xuân Diệu',
    dateOfBirth:'1992-08-08',
    gender:1,
    idCard:'865342123',
    phone:'0954333333',
    email:'xuandieu92@gmail.com',
    address:'K77/22 Thái Phiên, Quảng Trị',
    customerTypeId:3,
    status:1
  },{
    id:3,
    name:'Trương Đình Nghệ',
    dateOfBirth:'1990-02-27',
    gender:1,
    idCard:'488645199',
    phone:'0373213122',
    email:'nghenhan2702@gmail.com',
    address:'K323/12 Ông Ích Khiêm, Vinh',
    customerTypeId:1,
    status:1
  },{
    id:4,
    name:'Dương Văn Quan',
    dateOfBirth:'1981-07-08',
    gender:1,
    idCard:'543432111',
    phone:'0490039241',
    email:'duongquan@gmail.com',
    address:'K453/12 Lê Lợi, Đà Nẵng',
    customerTypeId:1,
    status:1
  },{
    id:5,
    name:'Hoàng Trần Nhi Nhi',
    dateOfBirth:'1995-12-09',
    gender:0,
    idCard:'795453345',
    phone:'0312345678',
    email:'nhinhi123@gmail.com',
    address:'224 Lý Thái Tổ, Gia Lai',
    customerTypeId:4,
    status:1
  },{
    id:6,
    name:'Tôn Nữ Mộc Châu',
    dateOfBirth:'2005-12-06',
    gender:0,
    idCard:'732434215',
    phone:'0988888844',
    email:'tonnuchau@gmail.com',
    address:'37 Yên Thế, Đà Nẵng',
    customerTypeId:4,
    status:1
  },{
    id:7,
    name:'Nguyễn Mỹ Kim',
    dateOfBirth:'1984-04-08',
    gender:0,
    idCard:'856453123',
    phone:'0912345698',
    email:'kimcuong84@gmail.com',
    address:'K123/45 Lê Lợi, Hồ Chí Minh',
    customerTypeId:1,
    status:1
  },{
    id:8,
    name:'Nguyễn Thị Hào',
    dateOfBirth:'1999-04-08',
    gender:0,
    idCard:'965656433',
    phone:'0763212345',
    email:'haohao99@gmail.com',
    address:'55 Nguyễn Văn Linh, Kon Tum',
    customerTypeId:3,
    status:1
  },{
    id:9,
    name:'Trần Đại Danh',
    dateOfBirth:'1994-07-01',
    gender:1,
    idCard:'432341235',
    phone:'0643343433',
    email:'danhhai99@gmail.com',
    address:'24 Lý Thường Kiệt, Quảng Ngãi',
    customerTypeId:1,
    status:1
  },{
    id:10,
    name:'Nguyễn Tâm Đắc',
    dateOfBirth:'1989-07-01',
    gender:1,
    idCard:'344343432',
    phone:'0987654321',
    email:'dactam@gmail.com',
    address:'22 Ngô Quyền, Đà Nẵng',
    customerTypeId:2,
    status:1
  }]

  constructor() {
  }


  get customerList(): ICustomer[] {
    return this._customerList;
  }

  set customerList(value: ICustomer[]) {
    this._customerList = value;
  }
}
