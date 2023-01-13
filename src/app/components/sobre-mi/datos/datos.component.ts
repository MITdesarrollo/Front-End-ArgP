import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { Sesion } from 'src/app/models/sesion';

import { PersonaService } from 'src/app/services/persona.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss']
})
export class DatosComponent  implements OnInit{
  datos: Persona[]  = [];
  
   
  constructor(
   private serviPerso : PersonaService,
   private router: Router,){}
ngOnInit(): void {
 this.getDatos();

}
getDatos(): void{
 this.serviPerso.lista().subscribe(
   data =>  this.datos = data
 )

}
editarDatos(datos: Persona) {
  this.router.navigate([
    'sobre-mi/edit-datos',
    {
    id: datos.id,
    nombre:datos.nombre,
    apellido:datos.apellido,
    titulo:datos.titulo,
    descripcion: datos.descripcion,
    img: datos.img,
    email: datos.email,
    curriculum: datos.curriculum,
    nacimiento: datos.nacimiento
    },
  ]);
  Swal.fire({
    title: 'Datos agregados correctamente',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
  this.router.navigate(['sobre-mi'])
  }
}


