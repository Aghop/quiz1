import { CommonModule } from '@angular/common';
import { importType } from '@angular/compiler/src/output/output_ast';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Vista1Component } from './components/vista1/vista1.component';
import { Vista2Component } from './components/vista2/vista2.component';
import { Vista3Component } from './components/vista3/vista3.component';
import { TareaService } from './serv/tarea.service';
import { TareasServService } from './serv/tareas-serv.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    Vista1Component,
    Vista2Component,
    Vista3Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [TareasServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
