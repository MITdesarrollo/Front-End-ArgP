import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Herramienta } from 'src/app/models/herramienta';
import { HerramientaService } from 'src/app/services/herramienta.service';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent implements OnInit {
stack!: Herramienta[];

constructor(
  private herrServ : HerramientaService,
  private router:Router){}

  ngOnInit(): void {
    this.getHerramientas();
  }

getHerramientas(): void{
  this.herrServ.list().subscribe(data => {this.stack = data})
}


delete(id: number) {
  if (id != undefined) {
    this.herrServ.delete(id).subscribe((data) => console.log('se borro'));
  }
  this.stack = this.stack.filter((el) => el.id != id);
}
editar(skill: Herramienta) {
  this.router.navigate([
    'stack/edit-skill',
    {
      id: skill.id,
      puesto: skill.nombre
    },
  ]);
}
}
