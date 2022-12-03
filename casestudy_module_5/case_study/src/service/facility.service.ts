import {Injectable} from '@angular/core';
import {IFacility} from "../model/IFacility";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
import {IFacilityType} from "../model/IFacilityType";
import {IRentType} from "../model/IRentType";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {


  constructor(private _httpClient: HttpClient) {
  }


  getFacilityList(): Observable<IFacility[]> {
    return this._httpClient.get<IFacility[]>(environment.API_URL_FACILITY);
  }

  getFacilityTypeList(): Observable<IFacilityType[]> {
    return this._httpClient.get<IFacilityType[]>(environment.API_URL_FACILITY_TYPES);
  }

  getRentTypeList(): Observable<IRentType[]> {
    return this._httpClient.get<IRentType[]>(environment.API_URL_RENT_TYPES);
  }

  search(searchForm: any): Observable<IFacility[]> {
    if (!searchForm.rentType && !searchForm.facilityType) {
      return this._httpClient.get<IFacility[]>(environment.API_URL_FACILITY +
        '?name_like=' + searchForm.nameSearch);
    }
    if (!searchForm.rentType && searchForm.facilityType) {
      return this._httpClient.get<IFacility[]>(environment.API_URL_FACILITY +
        '?name_like=' + searchForm.nameSearch +
        '&facilityType.id=' + searchForm.facilityType);
    }
    if (searchForm.rentType && !searchForm.facilityType) {
      return this._httpClient.get<IFacility[]>(environment.API_URL_FACILITY +
        '?name_like=' + searchForm.nameSearch +
        '&rentType.id=' + searchForm.rentType);
    }
    return this._httpClient.get<IFacility[]>(environment.API_URL_FACILITY +
        '?name_like=' + searchForm.nameSearch +
        '&facilityType.id=' + searchForm.facilityType +
        '&rentType.id=' + searchForm.rentType);
  }

}
