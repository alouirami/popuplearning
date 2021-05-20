import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEtudiantComponent } from './add-edit-etudiant.component';

describe('AddEditEtudiantComponent', () => {
  let component: AddEditEtudiantComponent;
  let fixture: ComponentFixture<AddEditEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
