import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { EditarService } from 'src/app/services/editar.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss']
})
export class DatosComponent  implements OnInit{
  datos: Persona[]  = [];
  
  editar!: boolean;

  constructor(
   private serviPerso : PersonaService,
   private router: Router,
   private serEdit: EditarService
  ){
   
   
}
ngOnInit(): void {
 this.getDatos();
 this.editar = this.serEdit.editar;
 console.log(this.editar + "aca deberia de cambiar");
}
mostrar(){
  console.log(this.editar + "asdasdas");
  
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
}
}
