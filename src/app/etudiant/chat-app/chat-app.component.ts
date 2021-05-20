import { Component, OnInit , Input,  ViewChild,ElementRef} from '@angular/core';
import {InstantChatService} from 'src/app/services/instant-chat.service';
import { SharedService } from 'src/app/services/shared.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.css']
})
export class ChatAppComponent implements OnInit{
  @ViewChild('EtdNameInput') EtdNameInput: ElementRef;

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
  @Input()etd:any;

  NOM_FICHIER:string;
  FICHIER:string;

  FilePath:string;
  NOM_PRENOM:string;
  CIN:string;
  ID_ETUDIANT;
EtudiantList:any=[];
EtudiantMsgList:any=[];
@Input()run:any;
ID_REUNION;
NOM:string;
ReunionList:any=[];
EtudiantNameList:any=[];
EtudiantIdList:any=[];
ReunionNameList:any=[];
ReunionIdList:any=[];
d = new Date();
  hours=this.d.getHours();
  minute=this.d.getMinutes();
  second=this.d.getSeconds();
  jour=this.d.getDate();
  mois=this.d.getMonth() + 1;
  ans=this.d.getFullYear();

  REUNION;
  LOCUTEUR_ETUDIANT;
  LOCUTEUR_ENSEIGANT;
  TEXT:string;
  DATE_CREATION:string; 

ngOnInit(): void {
    
    this.sharedService.GetEtdMsg(this.sharedService.IdentifReunion).subscribe(
      data=>{
        this.EtudiantMsgList=data;
      });
      
      this.sharedService.GetEtdName(this.sharedService.IdentifEtduiant).subscribe(
        data=>{
          this.EtudiantNameList=data;
        });
      this.sharedService.GetEtdId(this.sharedService.IdentifEtduiant).subscribe(
          data=>{
            this.EtudiantIdList=data;
          });
      this.sharedService.GetRunName(this.sharedService.IdentifReunion).subscribe(
          data=>{
            this.ReunionNameList=data;
          });
      this.sharedService.GetRunId(this.sharedService.IdentifReunion).subscribe(
            data=>{
              this.ReunionIdList=data;
            });
          
  }


 
  sendMessage()
  {
    this.instantChatservice.sendMessage({user: this.EtudiantNameList, room: this.room, message: this.messageText});
    var val = {  
      REUNION:this.ReunionIdList,
      LOCUTEUR_ETUDIANT:this.EtudiantIdList,
      TEXT:this.messageText,
      DATE_CREATION:String(this.jour)+'-'+String(this.mois)+'-'+String(this.ans)+' '+String(this.hours)+':'+String(this.minute)+':'+String(this.second)
      
    };
    console.log(val);
      this.sharedService.InsertEtudiant(val).subscribe(res=>{
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

       addDiscussFileEtd(){
        var val = {
          REUNION:this.ReunionIdList,
      LOCUTEUR_ETUDIANT:this.EtudiantIdList,
      NOM_FICHIER:this.NOM_FICHIER,
          DATE_CREATION:String(this.jour)+'-'+String(this.mois)+'-'+String(this.ans)+' '+String(this.hours)+':'+String(this.minute)+':'+String(this.second), 
        };
          this.sharedService.addDiscussFileEtd(val).subscribe(res=>{
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
