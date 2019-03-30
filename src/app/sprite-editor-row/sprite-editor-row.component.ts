import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sprite-editor-row',
  templateUrl: './sprite-editor-row.component.html',
  styleUrls: ['./sprite-editor-row.component.scss']
})
export class SpriteEditorRowComponent implements OnInit {


  constructor() { }

  @Input() wordValue: number;
  @Input() rowIndex: number;
  @Output() valueChanged: EventEmitter<SpriteRowValue> = new EventEmitter();
  ngOnInit() {
  }

  public pixelValueChanged(event: PixelValue) {
    const rotatedBit = 1 << event.bit - 1 ;
    if (event.value === true) {
      this.wordValue = this.wordValue | rotatedBit;
    } else {
       let mask = 0b1111111111111111;
       mask ^= rotatedBit;
       this.wordValue = this.wordValue & mask;
    }

    this.valueChanged.emit({
        index: this.rowIndex,
        value: this.wordValue 
      }
    );
  }

}
