import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditProfComponent } from './add-edit-prof.component';

describe('AddEditProfComponent', () => {
  let component: AddEditProfComponent;
  let fixture: ComponentFixture<AddEditProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditProfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
