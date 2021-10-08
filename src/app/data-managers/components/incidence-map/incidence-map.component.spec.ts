import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenceMapComponent } from './incidence-map.component';

describe('IncidenceMapComponent', () => {
  let component: IncidenceMapComponent;
  let fixture: ComponentFixture<IncidenceMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidenceMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidenceMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
