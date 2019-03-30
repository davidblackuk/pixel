import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpritePickerComponent } from './sprite-picker.component';

describe('SpritePickerComponent', () => {
  let component: SpritePickerComponent;
  let fixture: ComponentFixture<SpritePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpritePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpritePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
