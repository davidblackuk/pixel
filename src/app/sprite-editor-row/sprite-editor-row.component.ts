import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material';

@Component({
  selector: 'app-sprite-editor-row',
  templateUrl: './sprite-editor-row.component.html',
  styleUrls: ['./sprite-editor-row.component.scss']
})
export class SpriteEditorRowComponent implements OnInit, OnChanges {


  constructor() { }

  @Input() words: number[];
  @Input() row: number;
  
  @Output() valueChanged: EventEmitter<SpriteRowValue> = new EventEmitter();

  ngOnInit() {

  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log(`row changed ${this.row} = ${this.words[this.row]}`);
  }


  public pixelValueChanged(value: number) {

    this.words[this.row] = value;

    this.valueChanged.emit({
        index: this.row,
        value: this.wordValue()
      }
    );
  }

  public wordValue() {
    return this.words[this.row];
  }

}
