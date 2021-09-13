import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMeetingComponent } from './add-meeting/add-meeting.component';
import {ListMeetingComponent} from "./list-meeting/list-meeting.component";
import {HomeComponent} from "./home/home.component";

import {UpdateMeetingComponent} from "./update-meeting/update-meeting.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'AddMeeting', component: AddMeetingComponent},
  {path: 'listMeeting', component: ListMeetingComponent},
  {path: 'listMeeting/meeting/:id',  component : UpdateMeetingComponent},
  {path: '**', component: HomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
