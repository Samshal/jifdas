import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenceDataSidebarComponent } from './incidence-data-sidebar.component';

describe('IncidenceDataSidebarComponent', () => {
  let component: IncidenceDataSidebarComponent;
  let fixture: ComponentFixture<IncidenceDataSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidenceDataSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidenceDataSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
