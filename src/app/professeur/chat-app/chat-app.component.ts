import { Component, OnInit , Input, ViewChild,ElementRef} from '@angular/core';
import {InstantChatService} from 'src/app/services/instant-chat.service';
import { SharedService } from 'src/app/services/shared.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.css']
})
export class ChatAppComponent implements OnInit{
  @ViewChild('EmpNameInput') EmpNameInput: ElementRef;

  title = 'instant-chatting';
  user: String;
  room: String;
  // tslint:disable-next-line:ban-types
  messageText: String;
  messageArray: Array<{user: String , message: String }> = [];
  constructor(private instantChatservice: InstantChatService, private sharedService:SharedService ){
    this.instantChatservice.newUserJoined()
      .subscribe(data => this.messageArray.push(data));


    this.instantChatservice.userLeftRoom()
      .subscribe(data => this.messageArray.push(data));

    this.instantChatservice.newMessageReceived()
      .subscribe(data => this.messageArray.push(data));
  }
  @Input()prf:any;
  NOM_FICHIER:string;
  FICHIER:string;

  ID_EMPLOYE;
  NOM_PRENOM:string;
  ProfesseurList:any=[];
  EmployeMsgList:any=[];
  EmployeNameList:any=[];
  ReunionNameList:any=[];
  @Input()run:any;
  ID_REUNION;
  NOM:string;
  ReunionList:any=[];

  REUNION;
  LOCUTEUR_ETUDIANT;
  LOCUTEUR_ENSEIGANT;
  TEXT:string;
  DATE_CREATION:string; 

  Reunion:string;

  d = new Date();
  hours=this.d.getHours();
  minute=this.d.getMinutes();
  second=this.d.getSeconds();
  jour=this.d.getDate();
  mois=this.d.getMonth() + 1;
  ans=this.d.getFullYear();
  
  ngOnInit(): void {
    
    this.sharedService.GetEmpMsg(this.sharedService.IdentfRun).subscribe(
      data=>{
        this.EmployeMsgList=data;
      });
      console.log(this.EmployeMsgList);

      this.sharedService.GetEmpName(this.sharedService.IdentifEmp).subscribe(
        data=>{
          this.EmployeNameList=data;
        });
        console.log(this.EmployeNameList);
      this.sharedService.GetRunName(this.sharedService.IdentfRun).subscribe(
          data=>{
            this.ReunionNameList=data;
          });
          console.log(this.ReunionNameList);
  }
 
 
  sendMessage()
  {
    this.instantChatservice.sendMessage({user: this.EmployeNameList, room: this.room, message: this.messageText});
    var val = {  
      REUNION:this.sharedService.IdentfRun,
      LOCUTEUR_ENSEIGANT:this.sharedService.IdentifEmp,
      TEXT:this.messageText,
      DATE_CREATION:String(this.jour)+'-'+String(this.mois)+'-'+String(this.ans)+' '+String(this.hours)+':'+String(this.minute)+':'+String(this.second)
      
    };
    console.log(val);
      this.sharedService.addDiscussionText(val).subscribe(res=>{
        Swal.fire({
          position: 'bottom-start',
          title:'<div style="font-family: segoe;font-size: 20px;color:#000000; font-weight: bold;">'+ res.toString()+'</div>',
          showConfirmButton: false,
          background: '#ffffff00',
          backdrop: 'rgb(0 0 0 / 0%)',
          timer: 1500,
          hideClass: {
            popup: 'animate__animated animate__bounceOutLeft'
          }
        })
      });
  }

  addDiscussFile(){
    var val = {
      REUNION:this.sharedService.IdentfRun,
      LOCUTEUR_ENSEIGANT:this.sharedService.IdentifEmp,
  NOM_FICHIER:this.NOM_FICHIER,
      DATE_CREATION:String(this.jour)+'-'+String(this.mois)+'-'+String(this.ans)+' '+String(this.hours)+':'+String(this.minute)+':'+String(this.second), 
    };
      this.sharedService.addDiscussFile(val).subscribe(res=>{
        Swal.fire({
          position: 'bottom-start',
          title:'<div style="font-family: segoe;font-size: 20px;color:#000000; font-weight: bold;">'+ res.toString()+'</div>',
          showConfirmButton: false,
          background: '#ffffff00',
          backdrop: 'rgb(0 0 0 / 0%)',
          timer: 1500,
          hideClass: {
            popup: 'animate__animated animate__bounceOutLeft'
          }
        })
      });
     
  }
   uploadFile(event){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.sharedService.UploadFile(formData).subscribe((data:any)=>{
     this.NOM_FICHIER=data.toString();
    })
  }

}
