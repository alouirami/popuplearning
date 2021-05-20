import { Component, OnInit,Input  ,ViewChild,ElementRef } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  cheminLogo:any = "assets/img/popup_learning.png";
  image1:any = "assets/img/a1.png";
  image2:any = "assets/img/a2.png";
  image3:any = "assets/img/a3.png";
  image4:any = "assets/img/a4.png";
  vnext:any = "assets/img/vnext.png";
  @ViewChild('MatNameInput') MatNameInput: ElementRef;
  @ViewChild('PsdNameInput') PsdNameInput: ElementRef;
  @ViewChild('NameInput') NameInput: ElementRef;
  constructor(private service:SharedService) { }
  @Input()ecl:any;
  ID_USER;
  MATRICULE:string;
  NOM_PRENOM:string;
  MOT_PASSE:string;
  EMPLOYE;
  ETUDIANT;
  ngOnInit(): void {
    document.body.style.backgroundImage=" -webkit-radial-gradient(center, circle cover, #FFFFFF 35%, #0099cc 100%)";

  }
  addUserEcole(){
    var val = {ID_USER:this.ID_USER,
      NOM_PRENOM:this.NameInput.nativeElement.value,
      MOT_PASSE:this.PsdNameInput.nativeElement.value,
      TYPE_USER:1,
      MATRICULE:this.MatNameInput.nativeElement.value
    };
      this.service.addUserEcole(val).subscribe(res=>{
        Swal.fire(
          {
            position: 'top',
            icon: 'success',
            title: '<div style="color:#6264a7;">'+res.toString()+'</div>',
            showConfirmButton: false,
            timer: 1500
          }
          );
      });
  }

  addUserProfesseur(){
    var val = {ID_USER:this.ID_USER,
      NOM_PRENOM:this.NameInput.nativeElement.value,
      MOT_PASSE:this.PsdNameInput.nativeElement.value,
      TYPE_USER:2,
      MATRICULE:this.MatNameInput.nativeElement.value,
      EMPLOYE:1
    };
      this.service.addUserProfesseur(val).subscribe(res=>{
        Swal.fire(
          {
            position: 'top',
            icon: 'success',
            title: '<div style="color:#6264a7;">'+res.toString()+'</div>',
            showConfirmButton: false,
            timer: 1500
          }
          );
      });
  }

  addUserEtudiant(){
    var val = {ID_USER:this.ID_USER,
      NOM_PRENOM:this.NameInput.nativeElement.value,
      MOT_PASSE:this.PsdNameInput.nativeElement.value,
      TYPE_USER:3,
      MATRICULE:this.MatNameInput.nativeElement.value,
      ETUDIANT:1
    };
      this.service.addUserEtudiant(val).subscribe(res=>{
        Swal.fire(
          {
            position: 'top',
            icon: 'success',
            title: '<div style="color:#6264a7;">'+res.toString()+'</div>',
            showConfirmButton: false,
            timer: 1500
          }
          );
      });
  }

  add(){
    if( (<HTMLInputElement>document.getElementById("Ecole")).checked) {
      this.addUserEcole();
    }else if( (<HTMLInputElement>document.getElementById("Professeur")).checked) {
      this.addUserProfesseur();
    }
    else if( (<HTMLInputElement>document.getElementById("Eleve")).checked) {
      this.addUserEtudiant();
    }
  }
}
