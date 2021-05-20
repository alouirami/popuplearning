import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { HomeComponent } from 'src/app/home/home.component';


@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  image1:any = "assets/img/e1.jpg";
  ReunionEtudiantList:any=[];
  EtudiantNameList:any=[];
  REUNION;
  ETUDIANT;
  constructor(private sharedService:SharedService) { }
  ngOnInit(): void {

    this.refreshRunEtdList();

  }

  PutPresent(dataItem){
    
      var val = {
        REUNION:dataItem.REUNION,
        ETUDIANT:dataItem.ETUDIANT
      };
      
    
      this.sharedService.PutPresent(val).subscribe(res=>{
        
      });
  }

  getEinfo(dataItem){
    this.sharedService.IdentifReunion=dataItem.REUNION;
    this.sharedService.IdentifEtduiant=dataItem.ETUDIANT;
    console.log(this.sharedService.IdentifReunion,this.sharedService.IdentifEtduiant);

  }
  refreshRunEtdList(){
    const qString = window.location.search;
	var qParams = new URLSearchParams(qString);
	qParams.get('matricule');
    this.sharedService.GetReunionEtudiantName(qParams.get('matricule')).subscribe(
      data=>{
        this.ReunionEtudiantList=data;
      });
      this.sharedService.GetUserName(qParams.get('matricule')).subscribe(
        data=>{
          this.EtudiantNameList=data;
        });
  }
}

