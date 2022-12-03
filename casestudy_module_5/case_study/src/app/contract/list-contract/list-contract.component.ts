import {Component, OnInit} from '@angular/core';
import {IContract} from "../../../model/IContract";
import {ContractService} from "../../../service/contract.service";

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {
  contractList: IContract[] | undefined;
  p: number = 1;
  count: number = 1;
  constructor(private _contractService: ContractService) {
  }

  ngOnInit(): void {
    this.contractList = this._contractService.ContractList;
  }

}
