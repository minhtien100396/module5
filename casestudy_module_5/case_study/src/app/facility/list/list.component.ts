import {Component, OnInit} from '@angular/core';
import {IFacility} from "../../../model/IFacility";
import {FacilityService} from "../../../service/facility.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  facilityList: IFacility[] | undefined;

  constructor(private _facilityService:FacilityService) {
  }

  ngOnInit(): void {
    this.facilityList= this._facilityService.facilityList;
  }

}
