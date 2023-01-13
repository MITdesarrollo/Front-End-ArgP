import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import Swal from 'sweetalert2';


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
      puesto: new FormControl('',[Validators.required]),
      empresa: new FormControl('',[Validators.required]),
      descripcion:new FormControl('',[Validators.required]),
      inicio: new FormControl('',[Validators.required]),
      fin: new FormControl('',[Validators.required]),
      img: new FormControl('',[Validators.required]),
      url: new FormControl('',[Validators.required]),
      activo: new FormControl('',[Validators.required]),
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
    Swal.fire({
      title: 'Datos agregados correctamente',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
    this.router.navigate(['exp']);
  }
}
