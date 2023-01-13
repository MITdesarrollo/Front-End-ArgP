import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Herramienta } from 'src/app/models/herramienta';
import { HerramientaService } from 'src/app/services/herramienta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.scss']
})
export class EditSkillComponent {
  skill!: Herramienta;
  formulario!: FormGroup;
  id!: number;


  constructor(
    private servHerr: HerramientaService,
    private activatedRoute: ActivatedRoute,
    private router : Router)
    {
      this.activatedRoute.paramMap.subscribe((parametros) => {
        this.id = parseInt(parametros.get('id') || '0');
        this.formulario = new FormGroup({
          nombre: new FormControl(parametros.get('nombre'),[]),
        })

      })
   }

   editarSkill(skill: Herramienta){
    let skills: Herramienta = {
     id: this.id,
     nombre: this.formulario.value.nombre,  
    }
    this.servHerr.edit(skills).subscribe();
    Swal.fire({
      title: 'Datos editados correctamente',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
    this.router.navigate(['stack']);
    }
}
