import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from 'src/app/models/contacto';
import { ContactoService } from 'src/app/services/contacto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-red',
  templateUrl: './edit-red.component.html',
  styleUrls: ['./edit-red.component.scss']
})
export class EditRedComponent implements OnInit{
 red!: Contacto;
 formulario!: FormGroup

 id!: number;

 constructor(
  private servContc: ContactoService,
  private activatedRoute: ActivatedRoute,
  private router:Router){
 }

 ngOnInit(): void {
this.activatedRoute.paramMap.subscribe((parametros) => {
  this.id = parseInt(parametros.get('id') || '0');
  this.formulario = new FormGroup({
    nombre: new FormControl(parametros.get('nombre'),[]),
    icono: new FormControl(parametros.get('icono'),[]),
    url: new FormControl(parametros.get('url'),[])
  })

})
 }

 editarCurso(red : Contacto){
 let r: Contacto = {
  id: this.id,
  nombre : this.formulario.value.nombre,
  icono: this.formulario.value.icono,
  url: this.formulario.value.url
 }
 this.servContc.edit(r).subscribe();
 Swal.fire({
  title: 'Datos editados correctamente',
  showClass: {
    popup: 'animate__animated animate__fadeInDown'
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp'
  }
});
this.servContc.list().subscribe(data => this.router.navigate(['contacto']))
 }
}
