import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { Contacto } from 'src/app/models/contacto';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.scss']
})
export class RedComponent implements OnInit{
  redes!: Contacto[];
  constructor(
    private servCont: ContactoService,
    private router: Router,

  ){

  }
  ngOnInit(): void {
    this.getRedes();
  }
 getRedes(): void{
  this.servCont.list().subscribe(
    data => this.redes =data
  )
 }

 delete(id:number){
  if(id != undefined){
    this.servCont.delete(id).subscribe(
      data => console.log("se borro")
    )
  }
  this.redes = this.redes.filter(el => el.id != id)

}
  editar(red : Contacto){
    this.router.navigate(['contacto/edit-red', {
      id : red.id,
      nombre: red.nombre,
      icono: red.icono,
      url: red.url
    }]);
  }

}
