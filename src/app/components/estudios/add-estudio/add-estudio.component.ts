import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/services/educacion.service';
import Swal from 'sweetalert2';

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
      titulo: new FormControl('',[Validators.required]),
      institucion: new FormControl('',[Validators.required]),
      inicio: new FormControl('',[Validators.required]),
      fin: new FormControl('',[Validators.required]),
      img: new FormControl('',[Validators.required]),
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
    Swal.fire({
      title: 'Datos editados correctamente',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
    this.servEducacion.list().subscribe(data =>  this.router.navigate(['estudios']))
  }
}
