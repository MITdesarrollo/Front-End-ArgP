import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';

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
  console.log("este log" + proyecto);

}
}

