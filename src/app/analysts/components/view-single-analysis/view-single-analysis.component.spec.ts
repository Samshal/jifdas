import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSingleAnalysisComponent } from './view-single-analysis.component';

describe('ViewSingleAnalysisComponent', () => {
  let component: ViewSingleAnalysisComponent;
  let fixture: ComponentFixture<ViewSingleAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSingleAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSingleAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
