import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMeetingComponent } from './add-meeting/add-meeting.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MeetingService } from './Services/meeting.service';
import {HttpClientModule} from "@angular/common/http";
import { ListMeetingComponent } from './list-meeting/list-meeting.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UpdateMeetingComponent } from './update-meeting/update-meeting.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    AddMeetingComponent,
    ListMeetingComponent,
    HeaderComponent,
    HomeComponent,
    UpdateMeetingComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [
    MeetingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
