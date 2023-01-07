import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Herramienta } from 'src/app/models/herramienta';
import { HerramientaService } from 'src/app/services/herramienta.service';

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
      nombre: new FormControl('',[]),
      
    });
  }
  agregar(){
    const skill: Herramienta = {
      id: this.id,
      nombre: this.formulario.value.nombre,
    
    }
    this.servHerr.save(skill).subscribe();
    this.router.navigate(['stack']);
  }
}
