import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-edit-prof',
  templateUrl: './add-edit-prof.component.html',
  styleUrls: ['./add-edit-prof.component.css']
})
export class AddEditProfComponent implements OnInit {

  constructor(private service:SharedService) { }

@Input()prf:any;
    ID_EMPLOYE;
    NOM_PRENOM:string;
    CIN:string;
    DATE_NAISSANCE:string;
    DATE_CREATION:string;
    TEL:string;
    COMMENTAIRE:string;
    IS_PROF:string;

    d = new Date();
  hours=this.d.getHours();
  minute=this.d.getMinutes();
  second=this.d.getSeconds();
  jour=this.d.getDate();
  mois=this.d.getMonth() + 1;
  ans=this.d.getFullYear();
  ngOnInit(): void {
    this.ID_EMPLOYE=this.prf.ID_EMPLOYE;
    this.NOM_PRENOM=this.prf.NOM_PRENOM;
    this.CIN=this.prf.CIN;
    this.DATE_NAISSANCE=this.prf.DATE_NAISSANCE;
    this.TEL=this.prf.TEL;
    this.COMMENTAIRE=this.prf.COMMENTAIRE;
    
  }
  addProfesseur(){
    if( (<HTMLInputElement>document.getElementById("flexCheckDefault")).checked) {
      var val = {ID_EMPLOYE:this.ID_EMPLOYE,
        NOM_PRENOM:this.NOM_PRENOM,
        CIN:this.CIN,
        DATE_NAISSANCE:this.DATE_NAISSANCE,
        DATE_CREATION:String(this.jour)+'-'+String(this.mois)+'-'+String(this.ans)+' '+String(this.hours)+':'+String(this.minute)+':'+String(this.second),
        TEL:this.TEL,
        COMMENTAIRE:this.COMMENTAIRE,
        IS_PROF:1
  
      };
    }
    else{
      var val = {ID_EMPLOYE:this.ID_EMPLOYE,
        NOM_PRENOM:this.NOM_PRENOM,
        CIN:this.CIN,
        DATE_NAISSANCE:this.DATE_NAISSANCE,
        DATE_CREATION:String(this.jour)+'-'+String(this.mois)+'-'+String(this.ans)+' '+String(this.hours)+':'+String(this.minute)+':'+String(this.second),
        TEL:this.TEL,
        COMMENTAIRE:this.COMMENTAIRE,
        IS_PROF:0
  
      };
    }
    
      this.service.addProfesseur(val).subscribe(res=>{
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
  updateProfesseur(){
    if( (<HTMLInputElement>document.getElementById("flexCheckDefault")).checked) {
      var val = {ID_EMPLOYE:this.ID_EMPLOYE,
        NOM_PRENOM:this.NOM_PRENOM,
        CIN:this.CIN,
        DATE_NAISSANCE:this.DATE_NAISSANCE,
        DATE_CREATION:String(this.jour)+'-'+String(this.mois)+'-'+String(this.ans)+' '+String(this.hours)+':'+String(this.minute)+':'+String(this.second),
        TEL:this.TEL,
        COMMENTAIRE:this.COMMENTAIRE,
        IS_PROF:1
  
      };
    }
    else{
      var val = {ID_EMPLOYE:this.ID_EMPLOYE,
        NOM_PRENOM:this.NOM_PRENOM,
        CIN:this.CIN,
        DATE_NAISSANCE:this.DATE_NAISSANCE,
        DATE_CREATION:String(this.jour)+'-'+String(this.mois)+'-'+String(this.ans)+' '+String(this.hours)+':'+String(this.minute)+':'+String(this.second),
        TEL:this.TEL,
        COMMENTAIRE:this.COMMENTAIRE,
        IS_PROF:0
  
      };
    }
      this.service.updateProfesseur(val).subscribe(res=>{
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
