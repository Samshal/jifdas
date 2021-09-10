import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFieldReportComponent } from './edit-field-report.component';

describe('EditFieldReportComponent', () => {
  let component: EditFieldReportComponent;
  let fixture: ComponentFixture<EditFieldReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFieldReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFieldReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
