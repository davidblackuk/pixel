import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ImportDialogComponent } from '../import-dialog/import-dialog.component';
import { SpriteImporter } from '../sprite-importer';
import { SpriteStoreService } from '../sprite-store.service';
import { Sprite } from '../sprite';

@Component({
  selector: 'app-sprite-picker',
  templateUrl: './sprite-picker.component.html',
  styleUrls: ['./sprite-picker.component.scss']
})
export class SpritePickerComponent implements OnInit {

  constructor(public dialog: MatDialog, private spriteStoreService: SpriteStoreService) { 
    spriteStoreService.data.subscribe((data) => {
        this.sprites = data;
    });
  }

  private sprites: Sprite[];

  private importData = '';

  ngOnInit() {
  }

  public import() {
    const dialogRef = this.dialog.open(ImportDialogComponent, {
      width: '250px',
      height: '400px',
      data: {name: this.importData, animal: this.importData}
    });

    dialogRef.afterClosed().subscribe(result => {

      const importer = new SpriteImporter();
      const sprites = importer.import(result);
      this.spriteStoreService.add(sprites);
    });
  }

  public export() {

  }

 

}
