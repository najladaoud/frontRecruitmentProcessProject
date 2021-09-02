import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MeetingService} from "../Services/meeting.service";
import {Meeting} from "../model/Meeting";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-meeting',
  templateUrl: './list-meeting.component.html',
  styleUrls: ['./list-meeting.component.css']
})
export class ListMeetingComponent implements OnInit {
  constructor(private meetingservice: MeetingService ,  private router: Router) { }
  //listMeeting?:  Meeting[];
  listMeeting: Meeting[] = [];
  M?: Meeting;
  ngOnInit(): void {
    this.meetingservice.getAllMeetingPreparation().subscribe((data:Meeting[])=>this.listMeeting=data);
    this.M=new Meeting();

  }
  onAddMeetingclick() {
    this.router.navigate(['/AddMeeting']);
  }

  OnDeleteMeetingclick(id:any)
  {
    if(confirm("Are you sure to delete?")) {

    //sweetalert message popup
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think'
    }).then((result) => {
      if (result.value) {
         this.meetingservice.deleteMeetingPreparation(id).subscribe(() => this.listMeeting = this.listMeeting.filter(meeting => meeting.id !== id));
        Swal.fire(
          'Removed!',
          'Meeting removed successfully.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Meeting still in our database.)',
          'error'
        )
      }
    })

  this.meetingservice.getAllMeetingPreparation();
  }
  }

}
