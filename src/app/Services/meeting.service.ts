import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Meeting} from '../model/Meeting';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor(private http: HttpClient) { }

 getAllMeetingPreparation(): Observable<Meeting[]>{
   return this.http.get<Meeting[]>('http://localhost:8080/getAllMeeting');
  }

  addMeetingPreparation(M1: Meeting): any{
    return this.http.post('http://localhost:8080/AddMeeting', M1);
  }
  deleteMeetingPreparation(id:number): Observable<Meeting> {
    const url = 'http://localhost:8080/delete' + '/' + id;
    return this.http.delete<Meeting>(url);
  }
   updateMeetingPreparation(id: number, Meet: Meeting): Observable<Meeting>{
     return this.http.put<Meeting>('http://localhost:8080/updateMeeting' + '/' + id, Meet);
     this.getAllMeetingPreparation();
  }
  getMeetingById(id: number): Observable<Meeting> {
    return this.http.get<Meeting>('http://localhost:8080/getMeetingById' + '/' + id);
  }
}

