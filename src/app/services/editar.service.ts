import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditarService {
  editar: boolean = false;
  constructor() { }

  editarPerfil(value: boolean){
    this.editar = value;
    console.log(this.editar)  
  }
}
