import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from 'src/app/models/contacto';
import { Sesion } from 'src/app/models/sesion';
import { ContactoService } from 'src/app/services/contacto.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

activateNav: boolean = false;

redes!: Contacto[];
sesion!: Sesion;

constructor(
  private servRedes: ContactoService, 
 protected userServ: UsuarioService,
 private router: Router
){}
ngOnInit(): void {
  this.getDatos(); 
  this.userServ.obtenerDatosSesion().subscribe(data => this.sesion = data); 
}
getDatos(): void{
  this.servRedes.list().subscribe(
    data =>  this.redes = data)
}
handleNavbar(){
  this.activateNav = !this.activateNav;
  
}

onEdit(){
  this.userServ.onEdit();
  this.router.navigate(['sobre-mi'])
}

logout(){
  this.sesion.sesionActiva = false;
  localStorage.removeItem('sesion');
}
}


