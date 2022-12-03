import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ticket} from "../model/ticket";
import {environment} from "../environments/environment";
import {CarHouse} from "../model/carHouse";

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  message: string;

  constructor(private _httpClient: HttpClient) {
  }

  getListTicket(): Observable<Ticket[]> {
    return this._httpClient.get<Ticket[]>(environment.API_URL_TICKETS);
  }

  getListCarHouses(): Observable<CarHouse[]> {
    return this._httpClient.get<CarHouse[]>(environment.API_URL_CAR_HOUSES);
  }

  add(ticket: Ticket): Observable<Ticket> {
    return this._httpClient.post<Ticket>(environment.API_URL_TICKETS, ticket);
  }

  setMessage(message: string) {
    this.message = message;
  }

  getMessage() {
    return this.message;
  }

  findById(ticketId: number): Observable<Ticket> {
    return this._httpClient.get<Ticket>(environment.API_URL_TICKETS + '/' + ticketId);
  }

  save(id: number, ticketOderDetail: Ticket): Observable<Ticket> {
    return this._httpClient.put<Ticket>(environment.API_URL_TICKETS + '/' + id, ticketOderDetail);
  }

  search(rfSearch: any): Observable<Ticket[]> {
    if (!rfSearch.carHouse) {
      return this._httpClient.get<Ticket[]>(environment.API_URL_TICKETS +
        "?localFrom_like=" + rfSearch.localFrom +
        "&localTo_like=" + rfSearch.localTo);
    }
    return this._httpClient.get<Ticket[]>(environment.API_URL_TICKETS +
      "?localFrom_like=" + rfSearch.localFrom +
      "&localTo_like=" + rfSearch.localTo +
      "&carHouse.id=" + rfSearch.carHouse);
  }
}
