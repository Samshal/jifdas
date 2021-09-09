import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFieldReportsComponent } from './view-field-reports.component';

describe('ViewFieldReportsComponent', () => {
  let component: ViewFieldReportsComponent;
  let fixture: ComponentFixture<ViewFieldReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFieldReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFieldReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
