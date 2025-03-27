import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ToasterComponent } from './toaster/toaster.component';
import { authGuard } from '../guards/auth.guard';
import { Prueba1Component } from './prueba1/prueba1.component';

const routes: Routes = [

  {path:'dashboard', component:PagesComponent, canActivate:[authGuard],

  children:[

    {path:'', component:DashboardComponent, data:{titulo:'Dashboard'}},
    {path:'heroes', component:HeroesComponent, data:{titulo:'DataTable'}},
    {path:'toaster', component:ToasterComponent, data:{titulo:'Toaster'}},
    {path:'prueba1', component:Prueba1Component, data:{titulo:'Prueba1'}},


  ]
 }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
