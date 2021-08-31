import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Meeting} from '../model/Meeting';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  //url = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

 getAllM(): Observable<Meeting[]>{
   return this.http.get<Meeting[]>('http://localhost:8080/getAllMeeting');
  }

  addM(M1: Meeting): any{
    return this.http.post('http://localhost:8080/AddMeeting', M1);
  }
  //deleteGouv(id): Observable<Gouvernorat> {
  //  const url = this.url + '/' + id;
   // return this.http.delete<Gouvernorat>(url);
  //}
   //updateGouv(id: number, GOUV: Gouvernorat): Observable<Gouvernorat>{
     //return this.http.put<Gouvernorat>(this.url + '/' + id, GOUV);
    // this.getAllgouv();
  //}
  //getGouvById(id: number): Observable<Gouvernorat> {
    //return this.http.get<Gouvernorat>(this.url + '/' + id);
  //}
}

