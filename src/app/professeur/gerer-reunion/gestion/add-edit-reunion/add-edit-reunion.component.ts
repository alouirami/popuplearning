import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-edit-reunion',
  templateUrl: './add-edit-reunion.component.html',
  styleUrls: ['./add-edit-reunion.component.css']
})
export class AddEditReunionComponent implements OnInit {

  constructor(private service:SharedService) { }
  IdentifList:any=[];
  ClasseList:any=[];
  SpecialiteList:any=[];
  @Input()run:any;
  ID_REUNION;
    CLASSE:string;
    DATE_CREATION:string;
    ETAT:string;
    SPECIALITE:string;
    NOM:string;
    ENSEIGANT:string;
    
    
    d = new Date();
  hours=this.d.getHours();
  minute=this.d.getMinutes();
  second=this.d.getSeconds();
  jour=this.d.getDate();
  mois=this.d.getMonth() + 1;
  ans=this.d.getFullYear();

    ngOnInit(): void {
      this.ID_REUNION=this.run.ID_REUNION;
      
      
      
      this.NOM=this.run.NOM1;
      
      const qString = window.location.search;
	var qParams = new URLSearchParams(qString);
	qParams.get('cin');
    this.service.GetEmpId(qParams.get('cin')).subscribe(
      data=>{
        this.IdentifList=data;
      });
      this.loadClasseList();
      this.loadSpecialiteList();
    }

    loadSpecialiteList(){
      this.service.getSpecialiteList().subscribe((data:any)=>{
        console.log(data);
  this.SpecialiteList=data;
      });
    }
    loadClasseList(){
      this.service.getClasseList().subscribe((data:any)=>{
        console.log(data);
  this.ClasseList=data;
      });
    }
    
    addReunion(){
      if( (<HTMLInputElement>document.getElementById("flexCheckDefault")).checked) {
      var val = {ID_REUNION:this.ID_REUNION,
        CLASSE:this.CLASSE,
        DATE_CREATION:String(this.jour)+'-'+String(this.mois)+'-'+String(this.ans)+' '+String(this.hours)+':'+String(this.minute)+':'+String(this.second),
        ETAT:1,
        SPECIALITE:this.SPECIALITE,
        NOM:this.NOM,
        ENSEIGANT:Number(this.IdentifList)
  
      };
    }
    else{
      var val = {ID_REUNION:this.ID_REUNION,
        CLASSE:this.CLASSE,
        DATE_CREATION:String(this.jour)+'-'+String(this.mois)+'-'+String(this.ans)+' '+String(this.hours)+':'+String(this.minute)+':'+String(this.second),
        ETAT:2,
        SPECIALITE:this.SPECIALITE,
        NOM:this.NOM,
        ENSEIGANT:Number(this.IdentifList)
  
      }; 
    }

        this.service.addReunion(val).subscribe(res=>{
           
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

    updateReunion(){
      if( (<HTMLInputElement>document.getElementById("flexCheckDefault")).checked) {
      var val = {ID_REUNION:this.ID_REUNION,
        CLASSE:this.CLASSE,
        DATE_CREATION:String(this.jour)+'-'+String(this.mois)+'-'+String(this.ans)+' '+String(this.hours)+':'+String(this.minute)+':'+String(this.second),
        ETAT:1,
        SPECIALITE:this.SPECIALITE,
        NOM:this.NOM,
        ENSEIGANT:Number(this.IdentifList)};
      }
      else{
        var val = {ID_REUNION:this.ID_REUNION,
          CLASSE:this.CLASSE,
          DATE_CREATION:String(this.jour)+'-'+String(this.mois)+'-'+String(this.ans)+' '+String(this.hours)+':'+String(this.minute)+':'+String(this.second),
          ETAT:2,
          SPECIALITE:this.SPECIALITE,
          NOM:this.NOM,
          ENSEIGANT:Number(this.IdentifList)};
      }

        this.service.updateReunion(val).subscribe(res=>{
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
