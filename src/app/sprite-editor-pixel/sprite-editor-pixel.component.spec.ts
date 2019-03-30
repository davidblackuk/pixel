import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpriteEditorPixelComponent } from './sprite-editor-pixel.component';

describe('SpriteEditorPixelComponent', () => {
  let component: SpriteEditorPixelComponent;
  let fixture: ComponentFixture<SpriteEditorPixelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpriteEditorPixelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpriteEditorPixelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
