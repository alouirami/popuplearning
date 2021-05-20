import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprouverEtudiantComponent } from './approuver-etudiant.component';

describe('ApprouverEtudiantComponent', () => {
  let component: ApprouverEtudiantComponent;
  let fixture: ComponentFixture<ApprouverEtudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprouverEtudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprouverEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
