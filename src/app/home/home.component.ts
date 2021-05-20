import { Component, OnInit,  ViewChild,ElementRef , HostListener } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cheminLogo:any = "assets/img/popup_learning.png";
  image1:any = "assets/img/a1.png";
  image2:any = "assets/img/a2.png";
  image3:any = "assets/img/a3.png";
  image4:any = "assets/img/a4.png";
  vnext:any = "assets/img/vnext.png";
  url;
  @ViewChild('MatNameInput') MatNameInput: ElementRef;
  @ViewChild('PsdNameInput') PsdNameInput: ElementRef;
  constructor(private sharedService:SharedService) { }
  UserTypeList;
  UserPsdList;
  
  ngOnInit(): void {
    setTimeout( ()=>{
      document.getElementById("loader").style.display="none";
      }, 1230)
    document.body.style.backgroundImage=" -webkit-radial-gradient(center, circle cover, #FFFFFF 35%, #0099cc 100%)";
    this.sharedService.GetPsdUser().subscribe(
      data=>{
        this.UserPsdList=data;
      });
    const btn = (<HTMLInputElement>document.getElementById("btn"));
    btn.disabled = true;
    btn.style.background="#f47684";
    btn.style.border="white";
  }
  @HostListener('document:mousemove')
  activer(){
    if(this.UserPsdList.indexOf(this.PsdNameInput.nativeElement.value) !== -1){
    const btn = (<HTMLInputElement>document.getElementById("btn"));
    btn.disabled = false;
    btn.style.background="#2ecc71";
  }
  }
 
  getUinfo(){
    this.sharedService.GetTypeUser(this.MatNameInput.nativeElement.value).subscribe(
      data=>{
        this.UserTypeList=data;
      });
     
  }
 
  verif(){
    console.log(this.UserTypeList);
    if(this.UserTypeList.indexOf('3') !== -1){
      window.location.href='https://alouirami.github.io/popuplearning/etudiant?matricule='+this.MatNameInput.nativeElement.value;
      console.log(this.MatNameInput.nativeElement.value);

    }
    else if (this.UserTypeList.indexOf('2') !== -1) {
      window.location.href='https://alouirami.github.io/popuplearning/professeur?cin='+this.MatNameInput.nativeElement.value;
  } 
  else if (this.UserTypeList.indexOf('1') !== -1) {
    window.location.href='https://alouirami.github.io/popuplearning/ecole';
}
  else {
    alert('matricule inexistante');  
  }
    
  }
}
