import { Injectable } from '@angular/core';
import { Sprite } from './sprite';
import { BehaviorSubject, Observable } from 'rxjs';
import { state } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class SpriteStoreService {

  private state: Sprite [] = [];
  private _spritesDataSource: BehaviorSubject<Sprite[]> = new BehaviorSubject([]);
  private _spriteDataSource: BehaviorSubject<Sprite> = new BehaviorSubject(null);


  public readonly data: Observable<Sprite[]> = this._spritesDataSource.asObservable();
  public readonly currentSelection: Observable<Sprite> = this._spriteDataSource.asObservable();


  constructor() { }

  public add(sprites: Sprite[]) {
    this.state = sprites;
    this._spritesDataSource.next(this.state);
  }

  public selected(sprite: Sprite) {
    this._spriteDataSource.next(sprite);
  }
}
