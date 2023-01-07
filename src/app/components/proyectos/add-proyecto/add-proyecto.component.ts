import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';

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
      nombre: new FormControl('',[]),
      descripcion:new FormControl('',[]),
      img: new FormControl('',[]),
      inicio: new FormControl('',[]),
      fin: new FormControl('',[]),
      url: new FormControl('',[]),
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
    this.router.navigate(['proyectos']);
  }
}
