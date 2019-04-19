import { Injectable } from '@angular/core';
import { SpriteShifter } from './sprite-manipulations/sprite-shifter';

@Injectable({
  providedIn: 'root'
})
export class SpriteManipulationService {

  private shifter = new SpriteShifter();

  constructor() { }

  public clear(words: number []) : number [] {
    return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }

  public up(words: number []) : number [] {
    return this.shifter.up(words);
  }

  public down(words: number []) : number [] {
    return this.shifter.down(words);
  }

  public left(words: number []) : number [] {
    return this.shifter.left(words);
  }

  public right(words: number []) : number [] {
    return this.shifter.right(words);
  }

  public flipVertical(words: number []) : number [] {
    return this.shifter.flipVertical(words);
  }

  public flipHorizontal(words: number []) : number [] {
    return this.shifter.flipHorizontal(words);
  }

}
