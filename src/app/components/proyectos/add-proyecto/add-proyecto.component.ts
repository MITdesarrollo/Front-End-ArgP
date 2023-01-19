import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.scss']
})
export class AddProyectoComponent {
  formulario!: FormGroup;
  id!: number

  constructor(
    private router :Router,
    private servProyecto: ProyectoService,
    private activaroute: ActivatedRoute
  ){
    this.formulario = new FormGroup({
      nombre: new FormControl('',[Validators.required]),
      descripcion:new FormControl('',[Validators.required]),
      img: new FormControl('',[Validators.required]),
      inicio: new FormControl('',[Validators.required]),
      fin: new FormControl('',[Validators.required]),
      url: new FormControl('',[Validators.required]),
    });
  }


  agregar(){
    const proyecto: Proyecto = {
      id: this.id,
      nombre: this.formulario.value.nombre,
      descripcion: this.formulario.value.descripcion,
      inicio: this.formulario.value.inicio,
      fin: this.formulario.value.fin,
      img: this.formulario.value.img,
      url: this.formulario.value.url,
    }
    this.servProyecto.save(proyecto).subscribe();
    Swal.fire({
      title: 'Datos editados correctamente',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    this.servProyecto.lista().subscribe(data => { this.router.navigate(['proyectos'])})
  }
}
