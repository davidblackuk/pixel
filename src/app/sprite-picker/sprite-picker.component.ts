import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sprite-picker',
  templateUrl: './sprite-picker.component.html',
  styleUrls: ['./sprite-picker.component.scss']
})
export class SpritePickerComponent implements OnInit {

  constructor() { }

  private showImport = false;

  ngOnInit() {
  }

  public import() {
    this.showImport = true;
  }

  public export() {

  }

  public get showImportControl() {
    return this.showImport;
  }


}
