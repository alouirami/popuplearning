import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-approuver-etudiant',
  templateUrl: './approuver-etudiant.component.html',
  styleUrls: ['./approuver-etudiant.component.css']
})
export class ApprouverEtudiantComponent implements OnInit {

  constructor(private service:SharedService) { }
  @Input()runetd:any;
  ID_REUNION_ETUDIANT;
  ETUDIANT;
  REUNION;
  PRESENT:string;
  DATE_JOINTURE:string;
  DATE_SORTIE:string;
  d = new Date();
  hours=this.d.getHours();
  minute=this.d.getMinutes();
  second=this.d.getSeconds();
  jour=this.d.getDate();
  mois=this.d.getMonth() + 1;
  ans=this.d.getFullYear();
  etd:string;
  Reunion:string;
  ReunionList:any=[];
  EtudiantList:any=[];
 
  ngOnInit(): void {
    this.loadReunionList();
    this.loadEtudiantList();
  }
  addReunionEtudiant(){
    var val = {  
      ETUDIANT:this.etd,
      REUNION:this.Reunion,
      PRESENT:'0',
      DATE_JOINTURE:String(this.jour)+'-'+String(this.mois)+'-'+String(this.ans)+' '+String(this.hours)+':'+String(this.minute)+':'+String(this.second),
      DATE_SORTIE:String(this.jour)+'-'+String(this.mois)+'-'+String(this.ans)+' '+String(this.hours)+':'+String(this.minute)+':'+String(this.second)

    };
    console.log(val);
      this.service.addReunionEtudiant(val).subscribe(res=>{
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
  loadReunionList(){
    this.service.GetAllReunionNames().subscribe((data:any)=>{
      console.log(data);
this.ReunionList=data;
    });
  }
  loadEtudiantList(){
    this.service.GetAllEtudiantNames().subscribe((data:any)=>{
      console.log(data);
this.EtudiantList=data;
    });
  }
  

}
