import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/services/educacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-estudio',
  templateUrl: './estudio.component.html',
  styleUrls: ['./estudio.component.scss']
})
export class EstudioComponent implements OnInit {
estudios!: Educacion[];

constructor(
  private router: Router,
  private servEdu: EducacionService
){

}
ngOnInit(): void {
  this.getEstudios();
}
getEstudios(): void{
  this.servEdu.list().subscribe(
    data => this.estudios = data
  )
}


delete(id:number){
  if(id != undefined){
    this.servEdu.delete(id).subscribe(
      data => console.log("se borro")
    )
  }
  this.estudios = this.estudios.filter(el => el.id != id);
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
  editar(estudio : Educacion){
    this.router.navigate(['estudios/edit-estudio', {
      id: estudio.id,
      titulo: estudio.titulo,
      institucion: estudio.institucion,
      img: estudio.img,
      inicio: estudio.inicio,
      fin: estudio.fin
    }]);
}
}
