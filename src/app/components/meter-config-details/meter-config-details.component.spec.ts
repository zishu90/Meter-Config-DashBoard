import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterConfigDetailsComponent } from './meter-config-details.component';

describe('MeterConfigDetailsComponent', () => {
  let component: MeterConfigDetailsComponent;
  let fixture: ComponentFixture<MeterConfigDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeterConfigDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterConfigDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
