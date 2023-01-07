import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-edit-datos',
  templateUrl: './edit-datos.component.html',
  styleUrls: ['./edit-datos.component.scss']
})
export class EditDatosComponent implements OnInit{
  fomularioDatos!: FormGroup;
  datos!: Persona;
  id!: number

 constructor(
  private form: FormBuilder,
  private router: Router,
  private activateRoute: ActivatedRoute,
  private servPersona : PersonaService
  ){

    this.activateRoute.paramMap.subscribe((parametros)=>{
      this.id = parseInt(parametros.get('id') || '')
      this.fomularioDatos =  new FormGroup({
        nombre: new FormControl(parametros.get('nombre')),
        apellido: new FormControl(parametros.get('apellido')),
        descripcion:new FormControl(parametros.get('descripcion')),
        img: new FormControl(parametros.get('img')),
        titulo: new FormControl(parametros.get('titulo')),
        email: new FormControl(parametros.get('email')),
        curriculum: new FormControl(parametros.get('curriculum')),
        nacimiento: new FormControl(parametros.get('nacimiento'))
      })})
}

ngOnInit(): void {

}


editarDatos(datos: Persona){

  let dato: Persona = {
   id: this.id,
   nombre: this.fomularioDatos.value.nombre,
   apellido: this.fomularioDatos.value.apellido,
   titulo: this.fomularioDatos.value.titulo,
   descripcion: this.fomularioDatos.value.descripcion,
   img: this.fomularioDatos.value.img,
   email: this.fomularioDatos.value.email,
   curriculum: this.fomularioDatos.value.curriculum,
   nacimiento: this.fomularioDatos.value.nacimiento
  }
  this.servPersona.edit(dato).subscribe();
  alert('se edito')
  }
}




