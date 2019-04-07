import { Component, Output, OnInit, Input, EventEmitter } from '@angular/core';
import { SpriteStoreService } from '../sprite-store.service';
import { Sprite } from '../sprite';

@Component({
  selector: 'app-sprite-editor',
  templateUrl: './sprite-editor.component.html',
  styleUrls: ['./sprite-editor.component.scss']
})
export class SpriteEditorComponent implements OnInit {

  private currentSprite: Sprite;

  @Output() valueChanged: EventEmitter<number[]> = new EventEmitter();

   words: number [] = [
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

  constructor(private spriteStoreService: SpriteStoreService ) { 
    spriteStoreService.currentSelection.subscribe((sprite) => {
      if (sprite) {
        this.currentSprite = sprite;
        this.words = sprite.words;
      }
  });
  }

  ngOnInit() {
  }

  public onValueChanged(value: SpriteRowValue) {
    this.words[value.index] = value.value;
    this.valueChanged.emit(this.words);
  }

}
