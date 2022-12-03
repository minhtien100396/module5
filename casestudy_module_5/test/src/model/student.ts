import {Class} from "./class";

export interface Student {
  id?:number,
  name:string,
  gender:number,
  point:number,
  address:string,
  dateOfBirth:Date,
  class?:Class
  addressOption?: any;
}
