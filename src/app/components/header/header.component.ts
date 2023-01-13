import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/models/contacto';
import { Persona } from 'src/app/models/persona';
import { Sesion } from 'src/app/models/sesion';
import { ContactoService } from 'src/app/services/contacto.service';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

redes!: Contacto[];


constructor(
  private servRedes: ContactoService, 
){}
ngOnInit(): void {
  this.getDatos(); 
}
getDatos(): void{
  this.servRedes.list().subscribe(
    data =>  this.redes = data)
}

}


