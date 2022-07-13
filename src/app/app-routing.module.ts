import { MessagesComponent } from './classMessages/messages/messages.component';


import { LoginComponent } from './core/login/login.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./body/home/home.component";
import {NotFoundComponent} from "./core/not-found/not-found.component";
import {CalendarComponent} from "./classCalendar/calendar/calendar.component";
import {CreateMeetingComponent} from "./teacher/meeting/create-meeting/create-meeting.component";
// import { MessagesComponent } from './teacher/classMessages/messages/messages.component';

import {HomeworkComponent} from "./homework/homework/homework.component";



const routes:Routes = [
  {path: "", component:HomeComponent},
  {
    path: "teacher-account",
    component: LoginComponent
  },
  {
    path: "student-account",
    component: LoginComponent
  },

  {
    path: "parent-account",
    component: LoginComponent
  },
  {
    path: "admin-account",
    component: LoginComponent
  },
  { path: 'teacher', loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule) },

  {path: "cal", component:CalendarComponent},
  {path: "create-meeting", component:CreateMeetingComponent},
  {path:"messages", component:MessagesComponent},


  {path: "homework", component:HomeworkComponent},
  {path: '**', component:NotFoundComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
