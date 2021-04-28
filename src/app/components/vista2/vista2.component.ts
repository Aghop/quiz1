import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from 'protractor';
import { TareaService } from 'src/app/serv/tarea.service';
import { TareasServService } from 'src/app/serv/tareas-serv.service';


@Component({
  selector: 'app-vista2',
  templateUrl: './vista2.component.html',
  styleUrls: ['./vista2.component.scss'],
  providers: [TareasServService,TareaService]
})
export class Vista2Component implements OnInit {

  constructor(
    public tareaService: TareasServService,
    private route: Router
   ) {}
  
  ngOnInit(): void {
   
    console.log(this.tareaService.getTareas());
  }
  onClick(tarea: any){
    if( tarea.estado === '1' ){

      this.route.navigate(['/modificar', tarea.id]);
    }
  }
  onX(tarea: any){
    this.tareaService.eliminarTarea(tarea.id)
  }
}
