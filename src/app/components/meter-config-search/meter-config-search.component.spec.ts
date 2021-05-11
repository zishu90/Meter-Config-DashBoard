import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterConfigSearchComponent } from './meter-config-search.component';

describe('MeterConfigSearchComponent', () => {
  let component: MeterConfigSearchComponent;
  let fixture: ComponentFixture<MeterConfigSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeterConfigSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterConfigSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
