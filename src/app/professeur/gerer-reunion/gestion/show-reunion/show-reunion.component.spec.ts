import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowReunionComponent } from './show-reunion.component';

describe('ShowReunionComponent', () => {
  let component: ShowReunionComponent;
  let fixture: ComponentFixture<ShowReunionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowReunionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowReunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
