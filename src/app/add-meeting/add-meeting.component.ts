import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
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
    nomRecruteur: new FormControl('', [Validators.required]),
    npcandidat: new FormControl('',[Validators.required]),
    poste: new FormControl('',[Validators.required]),
    recommandepar: new FormControl(''),
    cooptepar: new FormControl(''),
    sourcepar: new FormControl(''),
    dateDeLentretien: new FormControl('',[Validators.required]),
    dateDeMiseAjour: new FormControl(''),
    autrecompetences: new FormControl('')
  });

  //ngOnInit(): void {}


  addM(): any {
    console.log(this.addFormMeeting.value);
    this.meetingService.addMeetingPreparation(this.meeting).subscribe(this.meetingService.getAllMeetingPreparation().subscribe(res => this.newlist.emit(res)));
    this.router.navigate(['/listMeeting']);
    this.meetingService.getAllMeetingPreparation();

  }
  onRetourclick(){
    this.router.navigate(['/listMeeting']);
  }



}
