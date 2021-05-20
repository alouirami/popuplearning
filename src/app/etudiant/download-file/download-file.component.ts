import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-download-file',
  templateUrl: './download-file.component.html',
  styleUrls: ['./download-file.component.css']
})
export class DownloadFileComponent implements OnInit {

  constructor(private sharedService:SharedService) { }
  FilesList:any=[];
  ngOnInit(): void {
    const qString = window.location.search;
	var qParams = new URLSearchParams(qString);
	qParams.get('matricule');
  this.sharedService.GetFileEtdInfo(qParams.get('matricule')).subscribe(
    data=>{
      this.FilesList=data;
    });
  }

}
