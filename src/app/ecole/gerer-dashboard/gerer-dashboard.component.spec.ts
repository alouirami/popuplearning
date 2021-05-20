import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GererDashboardComponent } from './gerer-dashboard.component';

describe('GererDashboardComponent', () => {
  let component: GererDashboardComponent;
  let fixture: ComponentFixture<GererDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GererDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GererDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
