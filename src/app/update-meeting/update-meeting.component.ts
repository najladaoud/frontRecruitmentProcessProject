import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meeting } from '../model/Meeting';
import { MeetingService } from '../Services/meeting.service';

@Component({
  selector: 'app-update-meeting',
  templateUrl: './update-meeting.component.html',
  styleUrls: ['./update-meeting.component.css']
})
export class UpdateMeetingComponent implements OnInit {
  @Input() meeting= new Meeting();
  pid ?: number;
  constructor(private meetingService: MeetingService, private router: Router, private activateR: ActivatedRoute) { }
  
  ngOnInit(): void {
    
 
  }
  
  
}