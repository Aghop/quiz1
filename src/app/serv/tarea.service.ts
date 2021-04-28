import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
    constructor() {
    }
    estado="";
    titulo="";
    id=0;
    static idAux=0;

    setEstado(valor:string){
      this.estado=valor;
    }
    setTitulo(valor:string){
      this.titulo=valor;
      this.id= TareaService.idAux;
      TareaService.idAux++;
    }
    setId(){
      this.id=TareaService.idAux;
      TareaService.idAux++;;
    }
    changeTitulo(valor:string){
      this.titulo=valor;
    }
    

}
