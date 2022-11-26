import {Component, OnInit} from '@angular/core';
import {IWord} from "../../model/iword";
import {ActivatedRoute, Params} from "@angular/router";
import {DictionaryService} from "../../service/dictionary.service";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  wordDetail: IWord | undefined;
  index: number | undefined;

  constructor(private _activatedRoute: ActivatedRoute,
              private _dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params: Params) => {
      this.index = params['index'];
      this.wordDetail = this._dictionaryService.getFindByIndex(this.index);
    })
  }
}
