import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { TareaService } from './tarea.service';


@Injectable({
  providedIn: 'root'
})
export class TareasServService {

  constructor( ) { }
  static tareas: any=[];
  static eliminados: any=[];

  addTareas(accion: TareaService) {
    TareasServService.tareas.push(accion);
  }
  modificarTarea(i: number, accion: TareaService){
    console.log('i: ',i);
    TareasServService.tareas.push(accion);
    this.eliminarTarea(i);
  }
  getTareas(): TareaService[] {
    return TareasServService.tareas;
  }
  getEliminados(): TareaService[] {
    return TareasServService.eliminados;
  }
 eliminarTarea(i: number){
   TareasServService.eliminados.push(TareasServService.tareas[i]);
 }


}

