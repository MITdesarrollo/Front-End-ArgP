import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';
import { DatosComponent } from '../datos/datos.component';

@Component({
  selector: 'app-add-datos',
  templateUrl: './add-datos.component.html',
  styleUrls: ['./add-datos.component.scss']
})
export class AddDatosComponent {
  formulario!: FormGroup;
  id!: number

  constructor(
    private router :Router,
    private serPersona: PersonaService,
    private activaroute: ActivatedRoute
  ){
    this.formulario = new FormGroup({
      nombre: new FormControl('',[Validators.required]),
      apellido: new FormControl('',[Validators.required]),
      descripcion:new FormControl('',[Validators.required]),
      titulo: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      img: new FormControl('',[Validators.required]),
      curriculum: new FormControl('',[Validators.required]),
      nacimiento: new FormControl('',[Validators.required]),
    });
  }

  agregar(){
    const datos: Persona = {
      id: this.id,
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      descripcion: this.formulario.value.descripcion,
      titulo: this.formulario.value.titulo,
      email: this.formulario.value.email,
      img: this.formulario.value.img,
      curriculum: this.formulario.value.curriculum,
      nacimiento: this.formulario.value.nacimiento,
    }
    this.serPersona.save(datos).subscribe();
    this.router.navigate(['sobre-mi']);
  }
}
