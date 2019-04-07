import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { BindingType } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-sprite-editor-pixel',
  templateUrl: './sprite-editor-pixel.component.html',
  styleUrls: ['./sprite-editor-pixel.component.scss']
})
export class SpriteEditorPixelComponent implements OnInit {

  constructor() { }

  @Input() wordValue: number;
  @Input() bit: number;
  @Output() valueChanged: EventEmitter<number> = new EventEmitter();


  ngOnInit() {

  }

  public get isSet() {
    const val = 1 << (this.bit - 1);
    return (this.wordValue & val) !== 0;
  }

  public onClick() {
    const val = 1 << (this.bit - 1);

    console.log(`Pixel ${this.bit} val is ${val.toString(2).padStart(16, '0')}`)

    if ((this.wordValue & val) !== 0) {
      let mask = 0xffff;
      mask = mask ^ val;

      console.log(`Pixel ${this.bit} msk is ${mask.toString(2).padStart(16, '0')}`)

      this.wordValue = this.wordValue & mask;
    } else {
      this.wordValue = this.wordValue | val;
    }

    console.log(`Pixel ${this.bit} wrd is ${this.wordValue.toString(2).padStart(16, '0')}`)

    this.valueChanged.emit(this.wordValue);
  }

}
