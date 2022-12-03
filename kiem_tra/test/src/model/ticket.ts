import {CarHouse} from "./carHouse";

export interface Ticket {
  id?: number,
  price:number,
  localFrom: string,
  localTo: string,
  dayFrom: string,
  hourForm: string,
  carHouse?: CarHouse,
  quantity: number
}
