import { Component, OnInit, Input } from '@angular/core';
import { SpriteImporter } from '../sprite-importer';

@Component({
  selector: 'app-sprite-picker-import',
  templateUrl: './sprite-picker-import.component.html',
  styleUrls: ['./sprite-picker-import.component.scss']
})
export class SpritePickerImportComponent implements OnInit {

  constructor() { }

      public text: string;

    @Input() visible = false;


  ngOnInit() {
  }

  import() {

    const importer = new SpriteImporter();
    var sprites = importer.import(this.text);

    sprites.forEach(sprite => {
      console.log(sprite.toString());
    });

    this.visible = false;
  }

}
