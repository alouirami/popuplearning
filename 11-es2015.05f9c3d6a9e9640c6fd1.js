(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{Oytz:function(e,t,i){"use strict";i.r(t),i.d(t,"ProfesseurModule",(function(){return y}));var s=i("ofXK"),n=i("3Pt+"),r=i("tyNb"),o=i("PSD3"),a=i.n(o),c=i("fXoL"),d=i("kESC"),h=i("zuHl"),b=i("oLy0"),p=i.n(b);const m=["EmpNameInput"];function l(e,t){if(1&e&&(c.Mb(0,"div",12),c.Mb(1,"label",13),c.jc(2,"Username"),c.Lb(),c.Kb(3,"input",14,15),c.Lb()),2&e){const e=t.$implicit;c.zb(3),c.ac("value",e)}}function u(e,t){if(1&e&&(c.Mb(0,"div",12),c.Mb(1,"label",16),c.jc(2,"Room"),c.Lb(),c.Kb(3,"input",17),c.Lb()),2&e){const e=t.$implicit;c.zb(3),c.ac("value",e)}}let g=(()=>{class e{constructor(e,t){this.instantChatservice=e,this.sharedService=t,this.peerList=[],this.messageArray=[],this.EmployeNameList=[],this.ReunionNameList=[],this.d=new Date,this.hours=this.d.getHours(),this.minute=this.d.getMinutes(),this.second=this.d.getSeconds(),this.jour=this.d.getDate(),this.mois=this.d.getMonth()+1,this.ans=this.d.getFullYear(),this.getPeerId=()=>{this.peer.on("open",e=>{this.peerId=e}),this.peer.on("call",e=>{navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then(t=>{this.lazyStream=t,e.answer(t),e.on("stream",t=>{this.peerList.includes(e.peer)||(this.streamRemoteVideo(t),this.currentPeer=e.peerConnection,this.peerList.push(e.peer))})}).catch(e=>{console.log(e+"Unable to get media")})})},this.peer=new p.a,this.instantChatservice.newUserJoined().subscribe(e=>this.messageArray.push(e)),this.instantChatservice.userLeftRoom().subscribe(e=>this.messageArray.push(e))}ngOnInit(){this.getPeerId(),this.sharedService.GetEmpName(this.sharedService.IdentifEmp).subscribe(e=>{this.EmployeNameList=e}),console.log(this.EmployeNameList),this.sharedService.GetRunName(this.sharedService.IdentfRun).subscribe(e=>{this.ReunionNameList=e})}join(){this.instantChatservice.joinRoom({user:this.EmpNameInput.nativeElement.value,room:this.room});var e={REUNION:this.sharedService.IdentfRun,LOCUTEUR_ENSEIGANT:this.sharedService.IdentifEmp,DATE_CREATION:String(this.jour)+"-"+String(this.mois)+"-"+String(this.ans)+" "+String(this.hours)+":"+String(this.minute)+":"+String(this.second),DATE_FIN:String(this.jour)+"-"+String(this.mois)+"-"+String(this.ans)+" "+String(this.hours)+":"+String(this.minute)+":"+String(this.second),TOKEN_ENSEIGANT:this.peerId};console.log(e),this.sharedService.addDiscussionVideo(e).subscribe(e=>{a.a.fire({position:"bottom-start",title:'<div style="font-family: segoe;font-size: 20px;color:#000000; font-weight: bold;">'+e.toString()+"</div>",showConfirmButton:!1,background:"#ffffff00",backdrop:"rgb(0 0 0 / 0%)",timer:1500,hideClass:{popup:"animate__animated animate__bounceOutLeft"}})})}leave(){this.instantChatservice.leaveRoom({user:this.EmpNameInput.nativeElement.value,room:this.room})}connectWithPeer(){this.callPeer(this.peerIdShare)}callPeer(e){navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then(t=>{this.lazyStream=t;const i=this.peer.call(e,t);i.on("stream",e=>{this.peerList.includes(i.peer)||(this.streamRemoteVideo(e),this.currentPeer=i.peerConnection,this.peerList.push(i.peer))})}).catch(e=>{console.log(e+"Unable to connect")})}streamRemoteVideo(e){const t=document.createElement("video");t.classList.add("video"),t.srcObject=e,t.play(),document.getElementById("remote-video").style.backgroundColor="#1b1a1ad6",document.getElementById("remote-video").append(t)}screenShare(){this.shareScreen()}shareScreen(){navigator.mediaDevices.getDisplayMedia({video:{cursor:"always"},audio:{echoCancellation:!0,noiseSuppression:!0}}).then(e=>{const t=e.getVideoTracks()[0];t.onended=()=>{this.stopScreenShare()},this.currentPeer.getSenders().find(e=>e.track.kind===t.kind).replaceTrack(t)}).catch(e=>{console.log("Unable to get display media "+e)})}stopScreenShare(){const e=this.lazyStream.getVideoTracks()[0];this.currentPeer.getSenders().find(t=>t.track.kind===e.kind).replaceTrack(e)}}return e.\u0275fac=function(t){return new(t||e)(c.Jb(d.a),c.Jb(h.a))},e.\u0275cmp=c.Db({type:e,selectors:[["app-screen-share"]],viewQuery:function(e,t){var i;1&e&&c.mc(m,!0),2&e&&c.dc(i=c.Vb())&&(t.EmpNameInput=i.first)},decls:22,vars:2,consts:[[2,"display","flex","flex-wrap","wrap","margin-right","-15px","margin-left","0px"],[2,"margin-right","-15px"],[1,"col-sm-2"],["class","form-group",4,"ngFor","ngForOf"],[1,"row"],[1,"col","sm-2"],[2,"margin-top","19px"],[1,"btn","btn-primary",2,"background-color","#6264a7","border-color","#6264a7",3,"mousedown","mouseup"],[1,"btn","btn-primary",2,"background-color","#6264a7","border-color","#6264a7",3,"click"],["type","button",1,"btn","btn-default",3,"click"],["id","remote-video",2,"width","643px","height","483px","border","2px solid","margin-left","15px"],[2,"margin-top","0px"],[1,"form-group"],["for","username"],["type","text","id","username","name","username","disabled","",3,"value"],["EmpNameInput",""],["for","room"],["type","text","id","room","name","room","disabled","",3,"value"]],template:function(e,t){1&e&&(c.Mb(0,"div"),c.Mb(1,"div",0),c.Mb(2,"div",1),c.Mb(3,"div",2),c.ic(4,l,5,1,"div",3),c.Lb(),c.Lb(),c.Mb(5,"div",4),c.Mb(6,"div",2),c.ic(7,u,4,1,"div",3),c.Lb(),c.Lb(),c.Mb(8,"div",4),c.Kb(9,"div",2),c.Lb(),c.Mb(10,"div",5),c.Mb(11,"div",6),c.Mb(12,"button",7),c.Ub("mousedown",(function(){return t.connectWithPeer()}))("mouseup",(function(){return t.join()})),c.jc(13,"D\xe9marer "),c.Lb(),c.jc(14," \xa0\xa0 "),c.Mb(15,"button",8),c.Ub("click",(function(){return t.screenShare()})),c.jc(16,"Screen share"),c.Lb(),c.Mb(17,"button",9),c.Ub("click",(function(){return t.leave()})),c.jc(18,"Leave"),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Kb(19,"div",10),c.Kb(20,"br"),c.Kb(21,"div",11),c.Lb()),2&e&&(c.zb(4),c.Zb("ngForOf",t.EmployeNameList),c.zb(3),c.Zb("ngForOf",t.ReunionNameList))},directives:[s.h],styles:["video[_ngcontent-%COMP%]{width:639px;height:483px}"]}),e})();const f=["EmpNameInput"];function v(e,t){if(1&e&&(c.Mb(0,"tr"),c.Mb(1,"td"),c.jc(2),c.Lb(),c.Lb()),2&e){const e=t.$implicit;c.zb(2),c.kc(e)}}function L(e,t){if(1&e&&(c.Mb(0,"div"),c.Mb(1,"div",15),c.Mb(2,"p",16),c.jc(3),c.Lb(),c.Mb(4,"div",17),c.jc(5),c.Lb(),c.Lb(),c.Lb()),2&e){const e=t.$implicit;c.zb(3),c.kc(e.message),c.zb(2),c.kc(e.user)}}const M=[{path:"",loadChildren:()=>i.e(10).then(i.bind(null,"5yvZ")).then(e=>e.GererReunionModule)},{path:"Chat",component:(()=>{class e{constructor(e,t){this.instantChatservice=e,this.sharedService=t,this.title="instant-chatting",this.messageArray=[],this.ProfesseurList=[],this.EmployeMsgList=[],this.EmployeNameList=[],this.ReunionNameList=[],this.ReunionList=[],this.d=new Date,this.hours=this.d.getHours(),this.minute=this.d.getMinutes(),this.second=this.d.getSeconds(),this.jour=this.d.getDate(),this.mois=this.d.getMonth()+1,this.ans=this.d.getFullYear(),this.instantChatservice.newUserJoined().subscribe(e=>this.messageArray.push(e)),this.instantChatservice.userLeftRoom().subscribe(e=>this.messageArray.push(e)),this.instantChatservice.newMessageReceived().subscribe(e=>this.messageArray.push(e))}ngOnInit(){this.sharedService.GetEmpMsg(this.sharedService.IdentfRun).subscribe(e=>{this.EmployeMsgList=e}),console.log(this.EmployeMsgList),this.sharedService.GetEmpName(this.sharedService.IdentifEmp).subscribe(e=>{this.EmployeNameList=e}),console.log(this.EmployeNameList),this.sharedService.GetRunName(this.sharedService.IdentfRun).subscribe(e=>{this.ReunionNameList=e}),console.log(this.ReunionNameList)}sendMessage(){this.instantChatservice.sendMessage({user:this.EmployeNameList,room:this.room,message:this.messageText});var e={REUNION:this.sharedService.IdentfRun,LOCUTEUR_ENSEIGANT:this.sharedService.IdentifEmp,TEXT:this.messageText,DATE_CREATION:String(this.jour)+"-"+String(this.mois)+"-"+String(this.ans)+" "+String(this.hours)+":"+String(this.minute)+":"+String(this.second)};console.log(e),this.sharedService.addDiscussionText(e).subscribe(e=>{a.a.fire({position:"bottom-start",title:'<div style="font-family: segoe;font-size: 20px;color:#000000; font-weight: bold;">'+e.toString()+"</div>",showConfirmButton:!1,background:"#ffffff00",backdrop:"rgb(0 0 0 / 0%)",timer:1500,hideClass:{popup:"animate__animated animate__bounceOutLeft"}})})}addDiscussFile(){var e={REUNION:this.sharedService.IdentfRun,LOCUTEUR_ENSEIGANT:this.sharedService.IdentifEmp,NOM_FICHIER:this.NOM_FICHIER,DATE_CREATION:String(this.jour)+"-"+String(this.mois)+"-"+String(this.ans)+" "+String(this.hours)+":"+String(this.minute)+":"+String(this.second)};this.sharedService.addDiscussFile(e).subscribe(e=>{a.a.fire({position:"bottom-start",title:'<div style="font-family: segoe;font-size: 20px;color:#000000; font-weight: bold;">'+e.toString()+"</div>",showConfirmButton:!1,background:"#ffffff00",backdrop:"rgb(0 0 0 / 0%)",timer:1500,hideClass:{popup:"animate__animated animate__bounceOutLeft"}})})}uploadFile(e){var t=e.target.files[0];const i=new FormData;i.append("uploadedFile",t,t.name),this.sharedService.UploadFile(i).subscribe(e=>{this.NOM_FICHIER=e.toString()})}}return e.\u0275fac=function(t){return new(t||e)(c.Jb(d.a),c.Jb(h.a))},e.\u0275cmp=c.Db({type:e,selectors:[["app-chat-app"]],viewQuery:function(e,t){var i;1&e&&c.mc(f,!0),2&e&&c.dc(i=c.Vb())&&(t.EmpNameInput=i.first)},inputs:{prf:"prf",run:"run"},decls:30,vars:4,consts:[[2,"position","absolute","top","70px","padding-left","752px"],[1,"row"],[2,"padding-left","485px","font-family","segoe"],[4,"ngFor","ngForOf"],[1,"well",2,"height","200px","padding","15px","padding-left","500px","font-family","segoe"],[2,"display","block","-ms-flex-wrap","wrap","flex-wrap","wrap","margin-right","-15px","margin-left","-290px","margin-top","183px"],[1,"input-group","mb-3",2,"width","800px"],[1,"col-sm-2"],[2,"padding",".375rem .75rem","color","#464775","background-color","#bbbcdd"],[1,"large","material-icons"],["type","file","hidden","",3,"change"],[1,"input-group-prepend"],["type","button",2,"padding",".375rem .75rem","box-shadow","0 0.2rem 0.4rem -0.075rem rgb(0 0 0 / 25%)","background","#6264a7","border","0","color","#fff",3,"click"],[1,"medium","material-icons"],["type","text",1,"col-sm-3",3,"ngModel","ngModelChange"],[1,"message-blue"],[1,"message-content"],[1,"message-timestamp-left"]],template:function(e,t){1&e&&(c.Mb(0,"div"),c.Kb(1,"app-screen-share"),c.Lb(),c.Mb(2,"div",0),c.Mb(3,"div",1),c.Kb(4,"hr"),c.Lb(),c.Mb(5,"div",2),c.Mb(6,"table"),c.ic(7,v,3,1,"tr",3),c.Lb(),c.Lb(),c.Mb(8,"div",1),c.Mb(9,"div",4),c.jc(10),c.ic(11,L,6,2,"div",3),c.Mb(12,"div",5),c.Mb(13,"div",6),c.Mb(14,"div",7),c.Mb(15,"label",8),c.Mb(16,"i",9),c.jc(17,"note_add"),c.Lb(),c.jc(18,"Upload"),c.Mb(19,"input",10),c.Ub("change",(function(e){return t.uploadFile(e)})),c.Lb(),c.Lb(),c.Lb(),c.Mb(20,"div",11),c.Mb(21,"button",12),c.Ub("click",(function(){return t.sendMessage()})),c.Mb(22,"i",13),c.jc(23,"send"),c.Lb(),c.jc(24,"Message"),c.Lb(),c.Mb(25,"button",12),c.Ub("click",(function(){return t.addDiscussFile()})),c.Mb(26,"i",13),c.jc(27,"send"),c.Lb(),c.jc(28,"File"),c.Lb(),c.Lb(),c.Mb(29,"input",14),c.Ub("ngModelChange",(function(e){return t.messageText=e})),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb()),2&e&&(c.zb(7),c.Zb("ngForOf",t.EmployeMsgList),c.zb(3),c.lc("",t.messageArray," "),c.zb(1),c.Zb("ngForOf",t.messageArray),c.zb(18),c.Zb("ngModel",t.messageText))},directives:[g,s.h,n.a,n.c,n.d],styles:['.message-blue[_ngcontent-%COMP%]{position:relative;margin-left:20px;margin-bottom:10px;padding:10px;background-color:#bbbcdd;width:200px;height:50px;text-align:left;font:400 .9em Open Sans,sans-serif;border:1px solid #464775;border-radius:10px}.message-content[_ngcontent-%COMP%]{padding:0;margin:0}.message-timestamp-left[_ngcontent-%COMP%]{position:absolute;font-size:.85em;font-weight:300;bottom:5px;left:5px}.message-blue[_ngcontent-%COMP%]:after{border-top:15px solid #bbbcdd;border-left:15px solid transparent;border-right:15px solid transparent;top:0;left:-15px;display:block}.message-blue[_ngcontent-%COMP%]:after, .message-blue[_ngcontent-%COMP%]:before{content:"";position:absolute;width:0;height:0}.message-blue[_ngcontent-%COMP%]:before{border-top:17px solid #464775;border-left:16px solid transparent;border-right:16px solid transparent;top:-1px;left:-17px}']}),e})()}];let S=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(t){return new(t||e)},imports:[[r.c.forChild(M)],r.c]}),e})(),y=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(t){return new(t||e)},imports:[[s.b,S,n.b]]}),e})()}}]);