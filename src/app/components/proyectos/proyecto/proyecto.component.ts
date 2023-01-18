import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.scss']
})
export class ProyectoComponent implements OnInit{
proyectos!: Proyecto[];


constructor(
  private router: Router,
  private servProyecto: ProyectoService,
  protected usuarioService: UsuarioService

){}

ngOnInit(): void {
  this.getProyecto();
}

getProyecto(): void{
  this.servProyecto.lista().subscribe(
    data => {
      this.proyectos = data;
     
    }
  )
}

delete(id: number) {
  if (id != undefined) {
    this.servProyecto.delete(id).subscribe();
  }
  this.proyectos = this.proyectos.filter((el) => el.id != id);
  Swal.fire({
    title: 'Datos eliminados correctamente',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
}

editarProyecto(proyecto: Proyecto) {
  this.router.navigate([
    'proyectos/edit-prod',
    {
    id: proyecto.id,
    nombre:proyecto.nombre,
    descripcion: proyecto.descripcion,
    img: proyecto.img,
    inicio: proyecto.inicio,
    fin: proyecto.fin,
    url: proyecto.url
    },
  ]);
}
}

