import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMeetingComponent } from './add-meeting/add-meeting.component';
import {ListMeetingComponent} from "./list-meeting/list-meeting.component";
import {HomeComponent} from "./home/home.component";
import {FeaturesComponent} from "./features/features.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  {path: 'AddMeeting', component: AddMeetingComponent},
  {path: 'listMeeting', component: ListMeetingComponent},
  {path: 'features', component: FeaturesComponent},
  {path: '', component: HomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
