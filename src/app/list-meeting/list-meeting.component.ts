import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MeetingService} from "../Services/meeting.service";
import {Meeting} from "../model/Meeting";

@Component({
  selector: 'app-list-meeting',
  templateUrl: './list-meeting.component.html',
  styleUrls: ['./list-meeting.component.css']
})
export class ListMeetingComponent implements OnInit {
  constructor(private Mservice: MeetingService ,  private router: Router) { }
  //nameg?: string;
  listMeeting?: Meeting[];
  M?: Meeting;

  ngOnInit(): void {
    this.Mservice.getAllMeetingPreparation().subscribe((data:Meeting[])=>this.listMeeting=data);
    this.M=new Meeting();

  }
  onAjouterclick() {
    this.router.navigate(['/AddMeeting']);
  }
  onDeleteclick(id:number):void{

this.Mservice.deleteMeetingPreparation(id)
  }

}
