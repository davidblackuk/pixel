import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BindingType } from '@angular/compiler';

@Component({
  selector: 'app-sprite-editor-pixel',
  templateUrl: './sprite-editor-pixel.component.html',
  styleUrls: ['./sprite-editor-pixel.component.scss']
})
export class SpriteEditorPixelComponent implements OnInit {

  constructor() { }

  @Input() wordValue: number;
  @Input() bit: number;
  @Output() valueChanged: EventEmitter<PixelValue> = new EventEmitter();

  private pixelOn: boolean;

  ngOnInit() {
    const val = 1 << this.bit;
    this.pixelOn = (this.wordValue & val) != 0;
  }

  public get isSet() {
    return this.pixelOn;
  }

  public onClick() {
    this.pixelOn = !this.pixelOn;
    this.valueChanged.emit({
      bit: this.bit,
      value: this.pixelOn
    });
  }

}
