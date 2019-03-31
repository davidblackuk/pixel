import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SpritePickerComponent } from './sprite-picker/sprite-picker.component';
import { SpriteEditorComponent } from './sprite-editor/sprite-editor.component';
import { SpriteEditorRowComponent } from './sprite-editor-row/sprite-editor-row.component';
import { SpriteEditorPixelComponent } from './sprite-editor-pixel/sprite-editor-pixel.component';
import { ImportDialogComponent } from './import-dialog/import-dialog.component';
import { MatDialogModule, MatButtonModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { SpritePickerSpriteComponent } from './sprite-picker-sprite/sprite-picker-sprite.component';

@NgModule({
  declarations: [
    AppComponent,
    SpritePickerComponent,
    SpriteEditorComponent,
    SpriteEditorRowComponent,
    SpriteEditorPixelComponent,
    ImportDialogComponent,
    SpritePickerSpriteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ ImportDialogComponent ]
})
export class AppModule { }
