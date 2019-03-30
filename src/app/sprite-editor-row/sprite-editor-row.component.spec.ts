import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpriteEditorRowComponent } from './sprite-editor-row.component';

describe('SpriteEditorRowComponent', () => {
  let component: SpriteEditorRowComponent;
  let fixture: ComponentFixture<SpriteEditorRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpriteEditorRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpriteEditorRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
