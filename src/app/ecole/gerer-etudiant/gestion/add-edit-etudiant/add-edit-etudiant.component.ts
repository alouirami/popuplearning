import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-edit-etudiant',
  templateUrl: './add-edit-etudiant.component.html',
  styleUrls: ['./add-edit-etudiant.component.css']
})
export class AddEditEtudiantComponent implements OnInit {

  constructor(private service:SharedService) { }

@Input()etd:any;

ID_ETUDIANT;
MATRICULE:string;
NOM_PRENOM:string;
CIN:string;
TEL:string;
DATE_NAISSANCE:string;
ADRESSE:string;
DATE_CREATION:string;
REMARQUE:string;
PASSPORT:string;
SEXE:string;

d = new Date();
  hours=this.d.getHours();
  minute=this.d.getMinutes();
  second=this.d.getSeconds();
  jour=this.d.getDate();
  mois=this.d.getMonth() + 1;
  ans=this.d.getFullYear();
  ngOnInit(): void {
    this.ID_ETUDIANT=this.etd.ID_ETUDIANT;
    this.MATRICULE=this.etd.MATRICULE;
    this.NOM_PRENOM=this.etd.NOM_PRENOM;
    this.CIN=this.etd.CIN;
    this.TEL=this.etd.TEL;
    this.DATE_NAISSANCE=this.etd.DATE_NAISSANCE;
    this.ADRESSE=this.etd.ADRESSE;
    this.REMARQUE=this.etd.REMARQUE;
    this.PASSPORT=this.etd.PASSPORT;
    
  }
  addEtudiant(){
    if( (<HTMLInputElement>document.getElementById("flexRadioDefault1")).checked) {
    var val = {ID_ETUDIANT:this.ID_ETUDIANT,
      MATRICULE:this.MATRICULE,
      NOM_PRENOM:this.NOM_PRENOM,
      CIN:this.CIN,
      TEL:this.TEL,
      DATE_NAISSANCE:this.DATE_NAISSANCE,
      ADRESSE:this.ADRESSE,
      DATE_CREATION:String(this.jour)+'-'+String(this.mois)+'-'+String(this.ans)+' '+String(this.hours)+':'+String(this.minute)+':'+String(this.second),
      REMARQUE:this.REMARQUE,
      PASSPORT:this.PASSPORT,
      SEXE:'homme'
    };
    
  }
  else if( (<HTMLInputElement>document.getElementById("flexRadioDefault2")).checked) {
      var val = {ID_ETUDIANT:this.ID_ETUDIANT,
        MATRICULE:this.MATRICULE,
        NOM_PRENOM:this.NOM_PRENOM,
        CIN:this.CIN,
        TEL:this.TEL,
        DATE_NAISSANCE:this.DATE_NAISSANCE,
        ADRESSE:this.ADRESSE,
        DATE_CREATION:String(this.jour)+'-'+String(this.mois)+'-'+String(this.ans)+' '+String(this.hours)+':'+String(this.minute)+':'+String(this.second),
        REMARQUE:this.REMARQUE,
        PASSPORT:this.PASSPORT,
        SEXE:'femme'
      };}
      this.service.addEtudiant(val).subscribe(res=>{
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
  updateEtudiant(){
    if( (<HTMLInputElement>document.getElementById("flexRadioDefault1")).checked) {
      var val = {ID_ETUDIANT:this.ID_ETUDIANT,
        MATRICULE:this.MATRICULE,
        NOM_PRENOM:this.NOM_PRENOM,
        CIN:this.CIN,
        TEL:this.TEL,
        DATE_NAISSANCE:this.DATE_NAISSANCE,
        ADRESSE:this.ADRESSE,
        DATE_CREATION:String(this.jour)+'-'+String(this.mois)+'-'+String(this.ans)+' '+String(this.hours)+':'+String(this.minute)+':'+String(this.second),
        REMARQUE:this.REMARQUE,
        PASSPORT:this.PASSPORT,
        SEXE:'homme'
      };
      
    }
    else if( (<HTMLInputElement>document.getElementById("flexRadioDefault2")).checked) {
        var val = {ID_ETUDIANT:this.ID_ETUDIANT,
          MATRICULE:this.MATRICULE,
          NOM_PRENOM:this.NOM_PRENOM,
          CIN:this.CIN,
          TEL:this.TEL,
          DATE_NAISSANCE:this.DATE_NAISSANCE,
          ADRESSE:this.ADRESSE,
          DATE_CREATION:String(this.jour)+'-'+String(this.mois)+'-'+String(this.ans)+' '+String(this.hours)+':'+String(this.minute)+':'+String(this.second),
          REMARQUE:this.REMARQUE,
          PASSPORT:this.PASSPORT,
          SEXE:'femme'
        };}
      this.service.updateEtudiant(val).subscribe(res=>{
        Swal.fire(
          {
            position: 'top',
            icon: 'info',
            title: '<div style="color:#6264a7;">'+res.toString()+'</div>',
            showConfirmButton: true,
            confirmButtonColor: '#6264a7'
          }
          );
      });
  }

}
