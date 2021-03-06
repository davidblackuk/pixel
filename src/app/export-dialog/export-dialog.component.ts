import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../import-dialog/import-dialog.component';
import { SpriteStoreService } from '../sprite-store.service';
import { Observable, Subscription } from 'rxjs';
import { Sprite } from '../sprite';

@Component({
  selector: 'app-export-dialog',
  templateUrl: './export-dialog.component.html',
  styleUrls: ['./export-dialog.component.scss']
})
export class ExportDialogComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  private code = '';

  constructor(
    public dialogRef: MatDialogRef<ExportDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private spriteStore: SpriteStoreService) {

    }

    ngOnInit() {
      this.subscription = this.spriteStore.data.subscribe(result => {
        if (result && result.length > 0) {
          console.log('subscribed, and called code = ' + this.code);
          this.initializeHeader();
          result.forEach(sprite => this.addSprite(sprite));
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  initializeHeader(): any {
      this.code += '';
      this.code += ';\n';
      this.code += '; Generated by pixel\n';
      this.code += ';\n';
      this.code += '\n';
  }

  addSprite(sprite: Sprite): void {

    if (sprite.label !== undefined && sprite.label !== '') {
      const label = sprite.label.trim();
      this.code += `${label}\n`;
    }
    this.code += `${sprite.toString()}\n`;
  }


  onClose(): void {
    this.dialogRef.close();
  }





}
