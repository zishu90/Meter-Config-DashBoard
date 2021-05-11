import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushObjectComponent } from './push-object.component';

describe('PushObjectComponent', () => {
  let component: PushObjectComponent;
  let fixture: ComponentFixture<PushObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PushObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PushObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
