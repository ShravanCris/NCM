import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ConcCardComponent } from './conc-card/conc-card.component';
import { HandicapComponent } from './handicap/handicap.component';
import {JournalistComponent } from './journalist/journalist.component';
import { ModifyCardComponent } from './modify-card/modify-card.component';
import { DeleteCardComponent } from './delete-card/delete-card.component';
import { ViewCardComponent } from './view-card/view-card.component';
const routes: Routes = [{
  path: 'home',
  component: HomeComponent
},
{
  path: 'register',
  component: RegisterComponent
},
{
  path: '',
  component: LoginComponent
},
{
  path: 'conc-card',
  component: ConcCardComponent
},
{
  path: 'Handicap',
  component:HandicapComponent
},
{
  path:'Journalist',
  component:JournalistComponent
},
{
  path:'modify-card',
  component:ModifyCardComponent
},
{
  path:'delete-card',
  component:DeleteCardComponent
},
{
  path:'view-card',
  component:ViewCardComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
