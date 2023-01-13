import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from 'src/app/models/contacto';
import { ContactoService } from 'src/app/services/contacto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-red',
  templateUrl: './add-red.component.html',
  styleUrls: ['./add-red.component.scss']
})
export class AddRedComponent implements OnInit{

  formulario!: FormGroup;


  constructor(
    private router: Router,
    private servContac: ContactoService,
    private activaroute: ActivatedRoute

  ){
    this.formulario = new FormGroup({
      nombre: new FormControl('',[Validators.required]),
      icono: new FormControl('',[Validators.required]),
      url: new FormControl('', [Validators.required])
    });
}
ngOnInit(): void {
}
agregar(){
  const red: Contacto = {
    id: Math.random(),
    nombre: this.formulario.value.nombre,
    icono: this.formulario.value.icono,
    url: this.formulario.value.url
  }
  console.log(red);
  this.servContac.save(red).subscribe();
  Swal.fire({
    title: 'Datos editados correctamente',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  });
  this.router.navigate(['contacto']);
}
}
