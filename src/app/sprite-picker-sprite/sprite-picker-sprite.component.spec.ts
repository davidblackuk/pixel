import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpritePickerSpriteComponent } from './sprite-picker-sprite.component';

describe('SpritePickerSpriteComponent', () => {
  let component: SpritePickerSpriteComponent;
  let fixture: ComponentFixture<SpritePickerSpriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpritePickerSpriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpritePickerSpriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
