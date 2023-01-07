import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Herramienta } from 'src/app/models/herramienta';
import { HerramientaService } from 'src/app/services/herramienta.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.scss']
})
export class EditSkillComponent {
  skill!: Herramienta;
  formulario!: FormGroup;
  id!: number;


  constructor(private servHerr: HerramientaService,
    private activatedRoute: ActivatedRoute)
    {
      this.activatedRoute.paramMap.subscribe((parametros) => {
        this.id = parseInt(parametros.get('id') || '0');
        this.formulario = new FormGroup({
          nombre: new FormControl(parametros.get('nombre'),[]),
        })

      })
   }

   editarSkill(herramienta: Herramienta){
    let skill: Herramienta = {
     id: this.id,
     nombre: this.formulario.value.nombre,  
    }
    this.servHerr.edit(skill).subscribe();
    alert('se edito')
    }
}
