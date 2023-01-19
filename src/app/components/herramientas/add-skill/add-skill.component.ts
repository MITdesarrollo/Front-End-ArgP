import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Herramienta } from 'src/app/models/herramienta';
import { HerramientaService } from 'src/app/services/herramienta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.scss']
})
export class AddSkillComponent {
  formulario!: FormGroup;
  id!: number


  constructor(
    private router :Router,
    private servHerr: HerramientaService,
    private activaroute: ActivatedRoute
  ){
    this.formulario = new FormGroup({
      nombre: new FormControl('',[Validators.required]),
      
    });
  }
  agregar(){
    const skill: Herramienta = {
      id: this.id,
      nombre: this.formulario.value.nombre,
    }
    this.servHerr.save(skill).subscribe();
    Swal.fire({
      title: 'Datos agregados correctamente',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
    this.servHerr.list().subscribe(data => this.router.navigate(['stack']))
    
  }
}
