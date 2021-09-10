import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclineFieldReportComponent } from './decline-field-report.component';

describe('DeclineFieldReportComponent', () => {
  let component: DeclineFieldReportComponent;
  let fixture: ComponentFixture<DeclineFieldReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclineFieldReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclineFieldReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
