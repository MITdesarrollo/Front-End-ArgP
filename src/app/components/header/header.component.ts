import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/models/contacto';
import { Persona } from 'src/app/models/persona';
import { ContactoService } from 'src/app/services/contacto.service';
import { EditarService } from 'src/app/services/editar.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

redes!: Contacto[];
editar!: boolean;

constructor(
  private servRedes: ContactoService,
  private editServ: EditarService
){
 
}
ngOnInit(): void {
  this.getDatos();
  this.editar= this.editServ.editar;
 }
getDatos(): void{
  this.servRedes.list().subscribe(
    data =>  this.redes = data)
  }

  cambiarModoEdicion() {
   this.editServ.editarPerfil(!this.editar);
   console.log("aca deberia cambiar el valor"+ this.editar);
   
}

}


