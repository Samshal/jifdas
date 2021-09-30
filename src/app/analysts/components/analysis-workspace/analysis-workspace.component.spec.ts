import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisWorkspaceComponent } from './analysis-workspace.component';

describe('AnalysisWorkspaceComponent', () => {
  let component: AnalysisWorkspaceComponent;
  let fixture: ComponentFixture<AnalysisWorkspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysisWorkspaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
