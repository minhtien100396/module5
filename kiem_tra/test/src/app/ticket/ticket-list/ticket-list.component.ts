import {Component, OnInit} from '@angular/core';
import {TicketService} from "../../../service/ticket.service";
import {Ticket} from "../../../model/ticket";
import {CarHouse} from "../../../model/carHouse";
import {FormBuilder, FormGroup} from "@angular/forms";
import {PushNotificationService} from "../../../service/push-notification.service";

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  ticketList: Ticket[] | undefined;
  carHouseList: CarHouse[] | undefined;
  p: number = 1;
  count: number = 3;
  message: string | undefined;
  ticketOder: Ticket | undefined;
  rfSearch: FormGroup
  searchDayFrom = '';
  searchDayTo = '';


  messaggeReceived = '';

  constructor(private _ticketService: TicketService,
              private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this._ticketService.getListTicket().subscribe(
      data => {
        this.ticketList = data;
      });

    this._ticketService.getListCarHouses().subscribe(
      data => {
        this.carHouseList = data;
      });

    this.rfSearch = this._formBuilder.group({
      localFrom: [''],
      localTo: [''],
      carHouse: [''],
      searchDayFrom: [this.searchDayFrom],
      searchDayTo: [this.searchDayTo]
    });

    this.message = this._ticketService.message;
  }

  getTicket(id: number) {
    console.log('id:', id)
    this._ticketService.findById(id).subscribe(
      data => {
        this.ticketOder = data;
        console.log(this.ticketOder);
      }
    )
  }

  onOrder() {

    this._ticketService.findById(this.ticketOder.id).subscribe(
      data => {
        this.ticketOder = data;
        if (this.ticketOder.quantity <= 0) {
          this._ticketService.setMessage('Sold Out');
          this.ngOnInit();
        } else {
          this.ticketOder.quantity = this.ticketOder.quantity - 1
          this._ticketService.save(this.ticketOder.id, this.ticketOder).subscribe(
            data => {
              this._ticketService.setMessage('Order Success');
              this.ngOnInit();
            });
        }
      }
    )
  }

  onSearch() {
    this._ticketService.search(this.rfSearch.value).subscribe(
      data => {
        this.ticketList = data.filter(value => {
          const dayFrom = new Date(value.dayFrom);
          let dayFromFrom = new Date(this.searchDayFrom);
          let dayFromTo = new Date(); /*Ngày hiên tại*/

          if (this.searchDayTo) {
            dayFromTo = new Date(this.searchDayTo);
          }
          if (!this.searchDayFrom && dayFrom.getTime() <= dayFromTo.getTime()) {
            return data;
          }
          if (dayFrom.getTime() >= dayFromFrom.getTime() && dayFrom.getTime() <= dayFromTo.getTime()) {
            return data;
          }
        })
      })
  }
}
