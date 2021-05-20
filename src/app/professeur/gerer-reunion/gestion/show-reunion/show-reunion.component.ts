import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-show-reunion',
  templateUrl: './show-reunion.component.html',
  styleUrls: ['./show-reunion.component.css']
})
export class ShowReunionComponent implements OnInit {
  teach:any = "assets/img/teach.jpg";
  constructor(private sharedService:SharedService) { }

  ReunionList:any=[];
  EmployeList:any=[];
  ModalTitle:string;
  ActivateAddEditRunComp:boolean=false;
  run:any;
  
  ngOnInit(): void {
    this.refreshRunList();
  }
  getRinfo(dataItem){
    
    this.sharedService.IdentfRun=dataItem.ID_REUNION;
    this.sharedService.IdentifEmp=dataItem.ENSEIGANT;
    console.log(this.sharedService.IdentfRun,this.sharedService.IdentifEmp);
  }
  
  addClick(){this.run={
    ID_REUNION:0,
    CLASSE:"",
    DATE_CREATION:"",
    ETAT:"",
    SPECIALITE:"",
    NOM:"",
    ENSEIGANT:""
  }
this.ModalTitle="Add Reunion";
this.ActivateAddEditRunComp=true;
}
editClick(item){
console.log(item);
this.run=item;
this.ModalTitle="Edit Reunion";
this.ActivateAddEditRunComp=true;
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
      this.sharedService.deleteReunion(item.ID_REUNION).subscribe(data=>{
        Swal.fire({
          position:'top',
          title: '<div style="color:#6264a7;">'+data.toString()+'</div>',
          icon:'success',
          showConfirmButton: false,
          timer: 1500
        })
        this.refreshRunList();
      })
     
    }
  })
}
closeClick(){this.ActivateAddEditRunComp=false;
this.refreshRunList();}
refreshRunList(){
  const qString = window.location.search;
	var qParams = new URLSearchParams(qString);
	qParams.get('cin');
    this.sharedService.GetRunionInfos(qParams.get('cin')).subscribe(
      data=>{
        this.ReunionList=data;
      });
      this.sharedService.GetUserName(qParams.get('cin')).subscribe(
        data=>{
          this.EmployeList=data;
        });
      
  }
  

}
