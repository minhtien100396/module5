import {IFacilityType} from "./IFacilityType";
import {IRentType} from "./IRentType";

export interface IFacility {
  id: number;
  img: string;
  name: string;
  area: number;
  cost: number;
  maxPeople: number;
  standardRoom: string;
  descriptionOtherConvenience: string;
  poolArea: number;
  numberOfFloors: number;
  facilityFree: string;
  status: number;
  facilityType?: IFacilityType;
  rentType?: IRentType;
}
