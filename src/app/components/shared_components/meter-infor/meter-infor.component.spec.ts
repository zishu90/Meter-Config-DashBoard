import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterInforComponent } from './meter-infor.component';

describe('MeterInforComponent', () => {
  let component: MeterInforComponent;
  let fixture: ComponentFixture<MeterInforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeterInforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
