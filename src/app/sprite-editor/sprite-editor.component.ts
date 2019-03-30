import { Component, Output, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sprite-editor',
  templateUrl: './sprite-editor.component.html',
  styleUrls: ['./sprite-editor.component.scss']
})
export class SpriteEditorComponent implements OnInit {

  @Output() valueChanged: EventEmitter<number[]> = new EventEmitter();

  @Input() words: number [] = [
    0b0000011000000000,
    0b0000011111000000,
    0b0000001111100000,
    0b0000001011000000,
    0b0000011111000000,
    0b0000001111000000,
    0b0000000110000000,
    0b0000001111000000,
    0b0000011111100000,
    0b0000011111100000,
    0b0000111011110000,
    0b0000110111110000,
    0b0000001111000000,
    0b0000011011100000,
    0b0000011101100000,
    0b0000111011100000,
  ];

  constructor() { }

  ngOnInit() {
  }

  public onValueChanged(value: SpriteRowValue) {
    this.words[value.index] = value.value;
    this.valueChanged.emit(this.words);
  }

}
