import {Component, OnInit} from '@angular/core';
import {IFacility} from "../../../model/IFacility";
import {FacilityService} from "../../../service/facility.service";
import {IFacilityType} from "../../../model/IFacilityType";
import {IRentType} from "../../../model/IRentType";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  rfSearch: FormGroup;
  facilityList: IFacility[] | undefined;
  facilityTypeList: IFacilityType[] | undefined;
  rentTypeList: IRentType[] | undefined;
  p: number = 1;
  count: number = 1;

  constructor(private _facilityService: FacilityService,
              private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this._facilityService.getFacilityList().subscribe(
      data => {
        this.facilityList = data;
      });

    this._facilityService.getFacilityTypeList().subscribe(
      data => {
        this.facilityTypeList = data;
      });
    this._facilityService.getRentTypeList().subscribe(
      data => {
        this.rentTypeList = data;
      });

    this.rfSearch = this._formBuilder.group({
      nameSearch: [''],
      rentType: [''],
      facilityType: ['']
    });
  }

  search() {
    this._facilityService.search(this.rfSearch.value).subscribe(
      data => {
        this.facilityList = data;
      }
    )
  }
}
