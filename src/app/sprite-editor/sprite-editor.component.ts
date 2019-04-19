import { Component, Output, OnInit, Input, EventEmitter } from '@angular/core';
import { SpriteStoreService } from '../sprite-store.service';
import { Sprite } from '../sprite';
import { SpriteManipulationService } from '../sprite-manipulation.service';

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

  constructor(private spriteStoreService: SpriteStoreService, private manipulations: SpriteManipulationService) {
    spriteStoreService.currentSelection.subscribe((sprite) => {
      if (sprite) {
        this.currentSprite = sprite;
        this.words = [...sprite.words];
      }
  });
  }

  ngOnInit() {
  }

  public onValueChanged(value: SpriteRowValue) {
    this.words[value.index] = value.value;
    this.updateRows();
  }


  public updateRows() {
    this.valueChanged.emit(this.words);
  }

  public clear() {
    this.words = this.manipulations.clear(this.words);
  }

  public up() {
    this.words = this.manipulations.up(this.words);
  }

  public down() {
    this.words = this.manipulations.down(this.words);
  }

  public left() {
    this.words = this.manipulations.left(this.words);
  }

  public right() {
    this.words = this.manipulations.right(this.words);
  }

  public flipHorizontal() {
    this.words = this.manipulations.flipHorizontal(this.words);
  }

  public flipVertical() {
    this.words = this.manipulations.flipVertical(this.words);
  }

  public save() {
    this.spriteStoreService.update(this.currentSprite.id, this.words);
  }
}
