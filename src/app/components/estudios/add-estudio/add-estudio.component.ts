import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-add-estudio',
  templateUrl: './add-estudio.component.html',
  styleUrls: ['./add-estudio.component.scss']
})
export class AddEstudioComponent {
  formulario!: FormGroup;
  id!: number
  constructor(
    private router :Router,
    private servEducacion: EducacionService,
    private activaroute: ActivatedRoute
  ){
    this.formulario = new FormGroup({
      titulo: new FormControl('',[]),
      institucion: new FormControl('',[]),
      inicio: new FormControl('',[]),
      fin: new FormControl('',[]),
      img: new FormControl('',[]),
    });
  }

  agregar(){
    const edu: Educacion = {
      id: this.id,
      titulo: this.formulario.value.titulo,
      institucion: this.formulario.value.institucion,
      inicio: this.formulario.value.inicio,
      fin: this.formulario.value.fin,
      img: this.formulario.value.img
    }
    this.servEducacion.save(edu).subscribe();
    this.router.navigate(['estudios']);
  }
}
