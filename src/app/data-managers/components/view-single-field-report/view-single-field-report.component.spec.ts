import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSingleFieldReportComponent } from './view-single-field-report.component';

describe('ViewSingleFieldReportComponent', () => {
  let component: ViewSingleFieldReportComponent;
  let fixture: ComponentFixture<ViewSingleFieldReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSingleFieldReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSingleFieldReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
