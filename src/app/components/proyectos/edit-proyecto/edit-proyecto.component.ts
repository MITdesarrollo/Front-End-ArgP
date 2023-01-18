import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.scss']
})
export class EditProyectoComponent {
  fomularioProyecto!: FormGroup;
  proyectos!: Proyecto;
  id!: number

  constructor(
    private form: FormBuilder,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private servProy: ProyectoService
    ){

    this.activateRoute.paramMap.subscribe((parametros)=>{

    this.id = parseInt(parametros.get('id') || '')
    this.fomularioProyecto =  new FormGroup({
      nombre: new FormControl(parametros.get('nombre')),
      descripcion:new FormControl(parametros.get('descripcion')),
      img: new FormControl(parametros.get('img')),
      url: new FormControl(parametros.get('url')),
      inicio: new FormControl(parametros.get('inicio')),
      fin: new FormControl(parametros.get('fin'))
    })

  });

  }

   editarProyecto(proyecto :Proyecto){
    let proye: Proyecto = {
     id: this.id,
     nombre: this.fomularioProyecto.value.nombre,
     descripcion: this.fomularioProyecto.value.descripcion,
     img: this.fomularioProyecto.value.img,
     url: this.fomularioProyecto.value.url,
     inicio: this.fomularioProyecto.value.inicio,
     fin: this.fomularioProyecto.value.fin
    }
    this.servProy.edit(proye).subscribe();
    Swal.fire({
      title: 'Datos editados correctamente',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    this.router.navigate(['proyectos'])
    }
}
