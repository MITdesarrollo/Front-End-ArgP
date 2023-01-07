import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';


@Component({
  selector: 'app-add-exp',
  templateUrl: './add-exp.component.html',
  styleUrls: ['./add-exp.component.scss'],

})
export class AddExpComponent {
  formulario!: FormGroup;
  id!: number


  constructor(
    private router :Router,
    private servExp: ExperienciaService,
    private activaroute: ActivatedRoute
  ){
    this.formulario = new FormGroup({
      puesto: new FormControl('',[]),
      empresa: new FormControl('',[]),
      descripcion:new FormControl('',[]),
      inicio: new FormControl('',[]),
      fin: new FormControl('',[]),
      img: new FormControl('',[]),
      url: new FormControl('',[]),
      activo: new FormControl('',[]),
    });
  }
  agregar(){
    const exp: Experiencia = {
      id: this.id,
      puesto: this.formulario.value.pruesto,
      empresa: this.formulario.value.empresa,
      descripcion: this.formulario.value.descripcion,
      inicio: this.formulario.value.inicio,
      fin: this.formulario.value.fin,
      img: this.formulario.value.img,
      url: this.formulario.value.url,
      activo: this.formulario.value.activo,
    }
    this.servExp.save(exp).subscribe();
    this.router.navigate(['exp']);
  }
}
