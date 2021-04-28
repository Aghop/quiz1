import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap  } from '@angular/router';
import { TareaService } from 'src/app/serv/tarea.service';
import { TareasServService } from 'src/app/serv/tareas-serv.service';

@Component({
  selector: 'app-vista3',
  templateUrl: './vista3.component.html',
  styleUrls: ['./vista3.component.scss']
})
export class Vista3Component implements OnInit {
  tareaForm: FormGroup;

  opciones= [

    new select('1','Iniciada'),
    new select('2','En proceso'),
    new select('3','Terminado')
  ]

  titulo=""
  numero=""
  id=0
  aux=0;
  tarea = new TareaService;
  constructor(

    private _builder: FormBuilder,
    private tareaService: TareasServService,
    private accion: TareaService,
    private route: Router,
    private route1: ActivatedRoute

  ) { 

    this.tareaForm = this._builder.group({
      titulo: ['',Validators.required],
      select: [null,Validators.required],

    })
  }

  ngOnInit(): void {
    this.route1.params.subscribe(params => {
      this.id = params['id'];
      console.log('params: ',this.id);
    });
    
    
    for (let i = 0; i < this.tareaService.getTareas().length; i++) {
      if(this.tareaService.getTareas()[i].id == this.id){

        this.tarea=this.tareaService.getTareas()[i];
        this.aux=i;
        console.log('aux: ',this.aux);
        break;
      
      }
    }
  }

  onSubmit(): void {
    this.accion=  new TareaService();

    this.titulo=this.tareaForm.value.titulo;
    this.numero=this.tareaForm.value.select.Id;

  this.accion.setEstado(this.numero);
    this.accion.setTitulo(this.titulo);

    console.log('tarea',this.accion);
    this.tareaService.modificarTarea(this.aux,this.accion);
    this.route.navigate(['']);
  }
}
export class select { 
  constructor(public Id:string, public opcione:string) {
  }	
}