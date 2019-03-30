import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SpritePickerComponent } from './sprite-picker/sprite-picker.component';
import { SpriteEditorComponent } from './sprite-editor/sprite-editor.component';
import { SpriteEditorRowComponent } from './sprite-editor-row/sprite-editor-row.component';
import { SpriteEditorPixelComponent } from './sprite-editor-pixel/sprite-editor-pixel.component';
import { SpritePickerImportComponent } from './sprite-picker-import/sprite-picker-import.component';

@NgModule({
  declarations: [
    AppComponent,
    SpritePickerComponent,
    SpriteEditorComponent,
    SpriteEditorRowComponent,
    SpriteEditorPixelComponent,
    SpritePickerImportComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
