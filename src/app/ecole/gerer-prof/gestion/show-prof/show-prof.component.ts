import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-show-prof',
  templateUrl: './show-prof.component.html',
  styleUrls: ['./show-prof.component.css']
})
export class ShowProfComponent implements OnInit {

  constructor(private sharedService:SharedService) { }

 ProfesseurList:any=[];
  ModalTitle:string;
  ActivateAddEditPrfComp:boolean=false;
  prf:any;
  
  ngOnInit(): void {
    this.refreshPrfList();
  }
  addClick(){this.prf={
    ID_EMPLOYE:0,
    NOM_PRENOM:"",
    CIN:"",
    DATE_NAISSANCE:"",
    DATE_CREATION:"",
    TEL:"",
    COMMENTAIRE:"",
    IS_PROF:""
  }
this.ModalTitle="Add Professeur";
this.ActivateAddEditPrfComp=true;
}
editClick(item){
console.log(item);
this.prf=item;
this.ModalTitle="Edit Professeur";
this.ActivateAddEditPrfComp=true;
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
      this.sharedService.deleteProfesseur(item.ID_EMPLOYE).subscribe(data=>{
        Swal.fire({
          position:'top',
          title:'<div style="color:#6264a7;">'+data.toString()+'</div>',
          icon:'success',
          showConfirmButton: false,
          timer: 1500
        })
        
        this.refreshPrfList();
      })
     
    }
  })
  
}
closeClick(){this.ActivateAddEditPrfComp=false;
this.refreshPrfList();}
refreshPrfList(){
    this.sharedService.getPrfList().subscribe(
      data=>{
        this.ProfesseurList=data;
      });
  }

}
