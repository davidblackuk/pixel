import { Component, OnInit, Input } from '@angular/core';
import { Sprite } from '../sprite';
import { SpriteStoreService } from '../sprite-store.service';

@Component({
  selector: 'app-sprite-picker-sprite',
  templateUrl: './sprite-picker-sprite.component.html',
  styleUrls: ['./sprite-picker-sprite.component.scss']
})
export class SpritePickerSpriteComponent implements OnInit {

  constructor(private spriteStoreService: SpriteStoreService) { }

  @Input() sprite: Sprite;
  private previewLines: string [] = [];

  ngOnInit() {
    this.initializePreview();
  }

  public select() {
    this.spriteStoreService.selected(this.sprite);
  }

  private initializePreview() {
    const res: string [] = [];
    this.sprite.words.forEach(word => {
      const row = word
          .toString(2)
          .padStart(16, '0')
          .replace(/0/g, '\u2B1C')
          .replace(/1/g, '\u2B1B');
          res.push(row);
        });
    this.previewLines = res;
  }
}
