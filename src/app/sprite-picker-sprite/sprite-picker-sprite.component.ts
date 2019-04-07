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

  ngOnInit() {
  }

  public select() {
    this.spriteStoreService.selected(this.sprite);
  }

}
