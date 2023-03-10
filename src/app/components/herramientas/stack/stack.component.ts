import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Herramienta } from 'src/app/models/herramienta';
import { HerramientaService } from 'src/app/services/herramienta.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent implements OnInit {
stack!: Herramienta[];

constructor(
  private herrServ : HerramientaService,
  private router:Router,
  protected usuarioService: UsuarioService){}

  ngOnInit(): void {
    this.getHerramientas();
  }

getHerramientas(): void{
  this.herrServ.list().subscribe(data => {this.stack = data})
}


delete(id: number) {
  if (id != undefined) {
    this.herrServ.delete(id).subscribe();
  }
  this.stack = this.stack.filter((el) => el.id != id);
  Swal.fire({
    title: 'Datos eliminados correctamente',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
}
editar(skill: Herramienta) {
  this.router.navigate([
    'stack/edit-skill',
    {
      id: skill.id,
      nombre: skill.nombre
    },
  ]);
}
}
