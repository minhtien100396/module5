import {Component, OnInit} from '@angular/core';
import {DictionaryService} from "../../service/dictionary.service";
import {IWord} from "../../model/iword";

@Component({
  selector: 'app-dictionay-page',
  templateUrl: './dictionay-page.component.html',
  styleUrls: ['./dictionay-page.component.css']
})
export class DictionayPageComponent implements OnInit {

  wordList: IWord[];

  constructor(private _dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    this.wordList = this._dictionaryService.wordList;
  }

}
