import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.scss'],
})
export class ExpComponent implements OnInit {
  experiencias!: Experiencia[];

  constructor(private servExp: ExperienciaService, private router: Router) {}

  ngOnInit(): void {
    this.getExp();
  }

  getExp(): void {
    this.servExp.list().subscribe((data) => {
      console.log(data);

      (this.experiencias = data)
    });

  }
  delete(id: number) {
    if (id != undefined) {
      this.servExp.delete(id).subscribe((data) => console.log('se borro'));
    }
    this.experiencias = this.experiencias.filter((el) => el.id != id);
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
  editar(exp: Experiencia) {
    this.router.navigate([
      'exp/edit-exp',
      {
        id: exp.id,
        puesto: exp.puesto,
        descripcion: exp.descripcion,
        img: exp.img,
        empresa: exp.empresa,
        inicio: exp.inicio,
        fin: exp.fin,
        activo: exp.activo,
        url: exp.url
      },
    ]);
  }
}
