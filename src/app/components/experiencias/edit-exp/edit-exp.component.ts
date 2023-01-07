import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-edit-exp',
  templateUrl: './edit-exp.component.html',
  styleUrls: ['./edit-exp.component.scss']
})
export class EditExpComponent {
  experiencia!: Experiencia
  formulario!: FormGroup;
  id!: number;


  constructor(private servExp: ExperienciaService,
    private activatedRoute: ActivatedRoute){
      this.activatedRoute.paramMap.subscribe((parametros) => {
        this.id = parseInt(parametros.get('id') || '0');
        this.formulario = new FormGroup({
          empresa: new FormControl(parametros.get('empresa'),[]),
          puesto: new FormControl(parametros.get('puesto'),[]),
          descripcion: new FormControl(parametros.get('descripcion'),[]),
          inicio: new FormControl(parametros.get('fecha_inicio'),[]),
          fin: new FormControl(parametros.get('fecha_fin'),[]),
          img: new FormControl(parametros.get('img'),[]),
          activo: new FormControl(parametros.get('activo'),[]),
          url: new FormControl(parametros.get('url'),[]),
        })

      })
   }

   editarExp(exp: Experiencia){
    let expe: Experiencia = {
     id: this.id,
     puesto: this.formulario.value.puesto,
     empresa: this.formulario.value.empresa,
     descripcion: this.formulario.value.descripcion,
     inicio: this.formulario.value.inicio,
     fin: this.formulario.value.fin,
     img: this.formulario.value.img,
     activo: this.formulario.value.activo,
     url: this.formulario.value.url
    }
    this.servExp.edit(expe).subscribe();
    alert('se edito')
    }
}
