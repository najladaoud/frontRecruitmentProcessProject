import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import {Meeting} from '../model/Meeting';
import { MeetingService } from '../Services/meeting.service';

@Component({
  selector: 'app-add-meeting',
  templateUrl: './add-meeting.component.html',
  styleUrls: ['./add-meeting.component.css']
})
export class AddMeetingComponent {
//addFormMeeting?:FormGroup;
//m:Meeting=new Meeting();
  @Input() meeting= new Meeting();
  @Output() newlist = new EventEmitter<Meeting[]>();
// listgouv: Gouvernorat[];
  constructor(private meetingService: MeetingService , private router: Router ) { }

  addFormMeeting= new  FormGroup({
    nomRecruteur: new FormControl(''),
    recommandepar: new FormControl(''),
    cooptepar: new FormControl(''),
    sourcepar: new FormControl(''),
    dateDeLentretien: new FormControl(''),
    dateDeMiseAjour: new FormControl(''),
    autrecompetences: new FormControl('')
  });

  //ngOnInit(): void {}


  addM(): any {
    console.log(this.addFormMeeting.value);
    this.meetingService.addM(this.meeting).subscribe(this.meetingService.getAllM().subscribe(res => this.newlist.emit(res)));
    this.router.navigate(['/listMeeting']);
    this.meetingService.getAllM();

  }
  /*
    reset(): void{
      this.addForm.reset();
    }*/


}
