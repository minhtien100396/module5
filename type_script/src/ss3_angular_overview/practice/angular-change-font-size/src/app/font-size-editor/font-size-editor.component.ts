import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-font-size-editor',
  templateUrl: './font-size-editor.component.html',
  styleUrls: ['./font-size-editor.component.css']
})
export class FontSizeEditorComponent implements OnInit {

  fontSize: number = 14;

  constructor() {
  }

  ngOnInit(): void {
  }

  changerFontsizeValue(size) {
    this.fontSize = size;
    console.log(this.fontSize);
  }

}
