import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpritePickerImportComponent } from './sprite-picker-import.component';

describe('SpritePickerImportComponent', () => {
  let component: SpritePickerImportComponent;
  let fixture: ComponentFixture<SpritePickerImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpritePickerImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpritePickerImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
