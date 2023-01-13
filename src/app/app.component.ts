import { Component, OnInit } from '@angular/core';
import { Contacto } from './models/contacto';
import { Sesion } from './models/sesion';
import { ContactoService } from './services/contacto.service';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  redes!: Contacto[];
  sesion!: Sesion;
  constructor(
    private servRedes: ContactoService,
    private sesionUser : UsuarioService 
  ){}
  ngOnInit(): void {
    this.getDatos();
    this.sesionUser.obtenerDatosSesion().subscribe(data => this.sesion = data)
   }
  getDatos(): void{
    this.servRedes.list().subscribe(
      data =>  this.redes = data)
    }
}
