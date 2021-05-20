import { Component, OnInit,Input,  ViewChild,ElementRef } from '@angular/core';
import Peer from 'peerjs';
import { SharedService } from 'src/app/services/shared.service';
import {InstantChatService} from 'src/app/services/instant-chat.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-screen-share',
  templateUrl: './screen-share.component.html',
  styleUrls: ['./screen-share.component.scss']
})
export class ScreenShareComponent implements OnInit {
  private peer: Peer;
  peerIdShare: string;
  peerId: string;
  private lazyStream: any;
  currentPeer: any;
  private peerList: Array<any> = [];
  messageArray: Array<{user: String , message: String }> = [];
  @ViewChild('EmpNameInput') EmpNameInput: ElementRef;
  room: String;
  constructor(private instantChatservice: InstantChatService, private sharedService:SharedService) {
    this.peer = new Peer();
    this.instantChatservice.newUserJoined()
      .subscribe(data => this.messageArray.push(data));


    this.instantChatservice.userLeftRoom()
      .subscribe(data => this.messageArray.push(data));
  }
  EmployeNameList:any=[];
  ReunionNameList:any=[];
  d = new Date();
  hours=this.d.getHours();
  minute=this.d.getMinutes();
  second=this.d.getSeconds();
  jour=this.d.getDate();
  mois=this.d.getMonth() + 1;
  ans=this.d.getFullYear();
  ngOnInit(): void {
    this.getPeerId();
    this.sharedService.GetEmpName(this.sharedService.IdentifEmp).subscribe(
      data=>{
        this.EmployeNameList=data;
      });
      console.log(this.EmployeNameList);
    this.sharedService.GetRunName(this.sharedService.IdentfRun).subscribe(
        data=>{
          this.ReunionNameList=data;
        });
        
  }

  join(){
    
    this.instantChatservice.joinRoom({user: this.EmpNameInput.nativeElement.value, room: this.room});
    
    var val = {  
      REUNION:this.sharedService.IdentfRun,
      LOCUTEUR_ENSEIGANT:this.sharedService.IdentifEmp,
      DATE_CREATION:String(this.jour)+'-'+String(this.mois)+'-'+String(this.ans)+' '+String(this.hours)+':'+String(this.minute)+':'+String(this.second),
      DATE_FIN:String(this.jour)+'-'+String(this.mois)+'-'+String(this.ans)+' '+String(this.hours)+':'+String(this.minute)+':'+String(this.second),
      TOKEN_ENSEIGANT:this.peerId
    };
    console.log(val);
      this.sharedService.addDiscussionVideo(val).subscribe(res=>{
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

leave(){
  this.instantChatservice.leaveRoom({user: this.EmpNameInput.nativeElement.value, room: this.room});
}


  private getPeerId = () => {
    this.peer.on('open', (id) => {
      this.peerId = id;
    });

    this.peer.on('call', (call) => {
      navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      }).then((stream) => {
        this.lazyStream = stream;

        call.answer(stream);
        call.on('stream', (remoteStream) => {
          if (!this.peerList.includes(call.peer)) {
            this.streamRemoteVideo(remoteStream);
            this.currentPeer = call.peerConnection;
            this.peerList.push(call.peer);
          }
        });
      }).catch(err => {
        console.log(err + 'Unable to get media');
      });
    });
  }

  connectWithPeer(): void {
    this.callPeer(this.peerIdShare);

  }

  private callPeer(id: string): void {
    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    }).then((stream) => {
      this.lazyStream = stream;

      const call = this.peer.call(id, stream);
      call.on('stream', (remoteStream) => {
        if (!this.peerList.includes(call.peer)) {
          this.streamRemoteVideo(remoteStream);
          this.currentPeer = call.peerConnection;
          this.peerList.push(call.peer);
        }
      });
    }).catch(err => {
      console.log(err + 'Unable to connect');
    });
  }

  private streamRemoteVideo(stream: any): void {
    const video = document.createElement('video');
    video.classList.add('video');
    video.srcObject = stream;
    video.play();
    document.getElementById("remote-video").style.backgroundColor = "#1b1a1ad6";
    document.getElementById('remote-video').append(video);
  }

  screenShare(): void {
    this.shareScreen();
  }

  private shareScreen(): void {
    
    // @ts-ignore
    navigator.mediaDevices.getDisplayMedia({
      video: {
        cursor: 'always'
      },
      audio: {
        echoCancellation: true,
        noiseSuppression: true
      }
    }).then(stream => {
      const videoTrack = stream.getVideoTracks()[0];
      videoTrack.onended = () => {
        this.stopScreenShare();
      };

      const sender = this.currentPeer.getSenders().find(s => s.track.kind === videoTrack.kind);
      sender.replaceTrack(videoTrack);
    }).catch(err => {
      console.log('Unable to get display media ' + err);
    });
  }

  private stopScreenShare(): void {
    const videoTrack = this.lazyStream.getVideoTracks()[0];
    const sender = this.currentPeer.getSenders().find(s => s.track.kind === videoTrack.kind);
    sender.replaceTrack(videoTrack);
  }

}
