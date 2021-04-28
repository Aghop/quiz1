import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vista1Component } from './components/vista1/vista1.component';
import { Vista2Component } from './components/vista2/vista2.component';
import { Vista3Component } from './components/vista3/vista3.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
{ path: '', component:Vista2Component},
{ path: 'anadir',component:Vista1Component},
{ path: 'modificar/:id', component:Vista3Component}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
