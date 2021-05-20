import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditReunionComponent } from './add-edit-reunion.component';

describe('AddEditReunionComponent', () => {
  let component: AddEditReunionComponent;
  let fixture: ComponentFixture<AddEditReunionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditReunionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditReunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
