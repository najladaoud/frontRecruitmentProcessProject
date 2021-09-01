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
 /* @Input() m= new Meeting();
  pId?: number ;
  constructor(private meetingService: MeetingService, private router: Router, private activateR: ActivatedRoute) { }
  */
  ngOnInit(): void {
    
   /*this.activateR.paramMap.subscribe(resultat => {
     this.pId= resultat.get('id');
      this.meetingService.getMeetingById(Number(resultat.get('id'))).subscribe(resultat => this.m = resultat); });*/
  }
  /*update(){
    this.meetingService.updateMeetingPreparation(Number(this.pId), this.m).subscribe(resultat => this.router.navigateByUrl('/listMeeting'));
    
  }*/

  
}
