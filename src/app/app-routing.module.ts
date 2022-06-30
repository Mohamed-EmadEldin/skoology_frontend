import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./body/home/home.component";
import {NotFoundComponent} from "./core/not-found/not-found.component";
import { TeacherAccountComponent } from './body/teacher-account/teacher-account.component';

const routes:Routes = [
  {path: "", component:HomeComponent},
  {
    path: "teacher-account",
    component: TeacherAccountComponent
  },
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
