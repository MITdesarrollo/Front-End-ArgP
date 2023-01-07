import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-edit-estudio',
  templateUrl: './edit-estudio.component.html',
  styleUrls: ['./edit-estudio.component.scss']
})
export class EditEstudioComponent {
  estudio!: Educacion;
  formulario!: FormGroup;
  id!: number;

  constructor(private servEdu: EducacionService,
    private activatedRoute: ActivatedRoute){
      this.activatedRoute.paramMap.subscribe((parametros) => {
        this.id = parseInt(parametros.get('id') || '0');
        this.formulario = new FormGroup({
          titulo: new FormControl(parametros.get('titulo'),[]),
          institucion: new FormControl(parametros.get('institucion'),[]),
          inicio: new FormControl(parametros.get('fecha_inicio'),[]),
          fin: new FormControl(parametros.get('fecha_fin'),[]),
          img: new FormControl(parametros.get('img'),[])
        })

      })
   }
   editarEstudio(estu: Educacion){
    let e: Educacion = {
     id: this.id,
     titulo: this.formulario.value.titulo,
     institucion: this.formulario.value.institucion,
     inicio: this.formulario.value.inicio,
     fin: this.formulario.value.fin,
     img: this.formulario.value.img
    }
    this.servEdu.edit(e).subscribe();
    alert('se edito')
    }

}
