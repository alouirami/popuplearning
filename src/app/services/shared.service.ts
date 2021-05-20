import {EventEmitter, Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:59095/api";
  readonly FileUrl="http://localhost:59095/Files";
  constructor(private http:HttpClient) { }
  
  IdentfRun;
  matricule ;
  IdentifEmp;
  IdentifEtd;
  IdentifReunion;
  IdentifEtduiant; 
  NameEtd;
  //crud employe



  getPrfList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employe/Get');
  }
  addProfesseur(val:any){
    return this.http.post(this.APIUrl+'/Employe/Post',val);

  }
  updateProfesseur(val:any){
    return this.http.put(this.APIUrl+'/Employe/Put',val);

  }
  deleteProfesseur(val:any){
    return this.http.delete(this.APIUrl+'/Employe/Delete/'+val);

  }
  //crud etudiant
  getEtdList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Etudiant/Get');
  }
  addEtudiant(val:any){
    return this.http.post(this.APIUrl+'/Etudiant/Post',val);

  }
  updateEtudiant(val:any){
    return this.http.put(this.APIUrl+'/Etudiant/Put',val);
  }
  deleteEtudiant(val:any){
    return this.http.delete(this.APIUrl+'/Etudiant/Delete/'+val);

  }
  getRunList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Reunion/Get');
  }
  //crud reunion
  addReunion(val:any){
    return this.http.post(this.APIUrl+'/Reunion/Post',val);

  }
  updateReunion(val:any){
    return this.http.put(this.APIUrl+'/Reunion/Put',val);

  }
  deleteReunion(val:any){
    return this.http.delete(this.APIUrl+'/Reunion/Delete/'+val);
  }

  
  addReunionEtudiant(val:any){
    return this.http.post(this.APIUrl+'/ReunionEtudiant/Post',val);

  }

  GetAllEmployeNames():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employe/GetAllEmployeNames');
  }
  GetAllReunionNames():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Reunion/GetAllReunionNames');
  }

  GetAllEtudiantNames():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Etudiant/GetAllEtudiantNames');
  }

  
 
  GetAllJoinEtudiantNames():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Etudiant/GetAllJoinEtudiantNames');
  }
  GetAllJoinReunionNames():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Reunion/GetAllJoinReunionNames');
  }

  addDiscussionText(val:any){
    return this.http.post(this.APIUrl+'/DiscussionText/Post',val);
  }

  updateDiscussionText(val:any){
    return this.http.put(this.APIUrl+'/DiscussionText',val);
  }
  InsertEtudiant(val:any){
    return this.http.post(this.APIUrl+'/DiscussionText/InsertEtudiant',val);
  }
  GetEmpMsg(id){
    return this.http.get(this.APIUrl+'/DiscussionText/GetEmpMsg/'+id);
  }
  GetEtdMsg(id){
    return this.http.get(this.APIUrl+'/DiscussionText/GetEtdMsg/'+id);
  }

  GetEmpName(id){
    return this.http.get(this.APIUrl+'/Employe/GetEmpName/'+id);
  }

  GetRunName(id){
    return this.http.get(this.APIUrl+'/Reunion/GetRunName/'+id);
  }
  GetEtdName(id){
    return this.http.get(this.APIUrl+'/Etudiant/GetEtdName/'+id);
  }
  GetRunEtdName():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/ReunionEtudiant/get');
  }

  GetReunionEtudiantName(id){
    return this.http.get(this.APIUrl+'/ReunionEtudiant/GetReunionEtudiantName/'+id);
  }
  GetEtdMatricule():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Etudiant/GetEtdMatricule');
  }
  
  GetTypeUser(id){
    return this.http.get(this.APIUrl+'/User/GetTypeUser/'+id);
  }
  
  GetPsdUser():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/User/GetPsdUser');
  }

  addUserEcole(val:any){
    return this.http.post(this.APIUrl+'/User/Post',val);

  }
  addUserProfesseur(val:any){
    return this.http.post(this.APIUrl+'/User/PosterEmp',val);
  }
  addUserEtudiant(val:any){
    return this.http.post(this.APIUrl+'/User/PosterEtd',val);
  }
  GetEtdId(id){
    return this.http.get(this.APIUrl+'/Etudiant/GetEtdId/'+id);
  }
  GetRunId(id){
    return this.http.get(this.APIUrl+'/Reunion/GetRunId/'+id);
  }
  GetUserName(id){
    return this.http.get(this.APIUrl+'/User/GetUserName/'+id);
  }

  addDiscussionVideo(val:any){
    return this.http.post(this.APIUrl+'/DiscussionVideo/Post',val);
  }
  updateDiscussionVideo(val:any){
    return this.http.put(this.APIUrl+'/DiscussionVideo/Put',val);
  }

  GetToken():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/DiscussionVideo/GetToken');
  }
  UploadFile(val:any){
    return this.http.post(this.APIUrl+'/DiscussionFichier/SaveFile',val);
  }
  addDiscussFileEtd(val:any){
    return this.http.post(this.APIUrl+'/DiscussionFichier/PostEtd',val);
  }
  addDiscussFile(val:any){
    return this.http.post(this.APIUrl+'/DiscussionFichier/Post',val);
  }
  GetFileInfo(id){
    return this.http.get(this.APIUrl+'/DiscussionFichier/GetFileInfo/'+id);
  }
  GetFileEtdInfo(id){
    return this.http.get(this.APIUrl+'/DiscussionFichier/GetFileEtdInfo/'+id);
  }
  PutPresent(val:any){
    return this.http.put(this.APIUrl+'/ReunionEtudiant/PutPresent',val);
  }
  GetEmpId(id){
    return this.http.get(this.APIUrl+'/Employe/GetEmpId/'+id);
  }
  getClasseList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Classe/Get');
  }
  getSpecialiteList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Specialite/Get');
  }
  GetRunionInfos(id){
    return this.http.get(this.APIUrl+'/Reunion/GetRunionInfos/'+id);
  }

}
