import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterOperationComponent } from './meter-operation.component';

describe('MeterOperationComponent', () => {
  let component: MeterOperationComponent;
  let fixture: ComponentFixture<MeterOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeterOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
