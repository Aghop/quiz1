import { Inject, Injectable } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormsModule } from '@angular/forms';
import { TareaService } from 'src/app/serv/tarea.service';
import { TareasServService } from 'src/app/serv/tareas-serv.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-vista1',
  templateUrl: './vista1.component.html',
  styleUrls: ['./vista1.component.scss'],
  providers: [TareasServService,TareaService]
})
export class Vista1Component implements OnInit {

  tareaForm: FormGroup
  opciones= [
    new select('1','Iniciada'),
    new select('2','En proceso'),
    new select('3','Terminado')
  ]
  titulo=""
  numero=""

  constructor(
    private _builder: FormBuilder,
    private tareaService: TareasServService,
    private accion: TareaService,
    private route: Router,
  ) { 
    this.tareaForm = this._builder.group({
      titulo: ['',Validators.required],
      select: [null,Validators.required],
    })
  }
  ngOnInit(): void {}


  onSubmit(): void {

    this.accion=  new TareaService();

    this.titulo=this.tareaForm.value.titulo;
    this.numero=this.tareaForm.value.select.Id;

    this.accion.setEstado(this.numero);
    this.accion.setTitulo(this.titulo); 
    this.tareaService.addTareas(this.accion);

    console.log(this.numero,this.titulo);
    console.log(this.tareaService);

    this.route.navigate(['']);
  }
  
}

export class select { 
  constructor(public Id:string, public opcione:string) {
  }	
}
