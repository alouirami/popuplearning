import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-show-etudiant',
  templateUrl: './show-etudiant.component.html',
  styleUrls: ['./show-etudiant.component.css']
})
export class ShowEtudiantComponent implements OnInit {

  constructor(private sharedService:SharedService) { }

  EtudiantList:any=[];
  ModalTitle:string;
  ActivateAddEditEtdComp:boolean=false;
  etd:any;
  
  ngOnInit(): void {
    this.refreshEtdList();
  }
  addClick(){this.etd={
    ID_ETUDIANT:0,
    MATRICULE:"",
    NOM_PRENOM:"",
    CIN:"",
    TEL:"",
    DATE_NAISSANCE:"",
    DATE_CREATION:"",
    REMARQUE:"",
    PASSPORT:"",
    SEXE:""

  }
this.ModalTitle="Add  Etudiant";
this.ActivateAddEditEtdComp=true;
}
editClick(item){
console.log(item);
this.etd=item;
this.ModalTitle="Edit Etudiant";
this.ActivateAddEditEtdComp=true;
}
deleteClick(item){
  Swal.fire({
    position: 'top',
    title: '<div style="color:#6264a7;">'+'Are you sure?'+'</div>',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#6264a7',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.sharedService.deleteEtudiant(item.ID_ETUDIANT).subscribe(data=>{
        Swal.fire({
          position:'top',
          title:'<div style="color:#6264a7;">'+data.toString()+'</div>',
          icon:'success',
          showConfirmButton: false,
          timer: 1500
        })
        this.refreshEtdList();
      })
     
    }
  })
  
}
closeClick(){this.ActivateAddEditEtdComp=false;
this.refreshEtdList();}
refreshEtdList(){
    this.sharedService.getEtdList().subscribe(
      data=>{
        this.EtudiantList=data;
      });
  }

}
