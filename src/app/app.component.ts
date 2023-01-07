import { Component, OnInit } from '@angular/core';
import { Contacto } from './models/contacto';
import { ContactoService } from './services/contacto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  redes!: Contacto[];
  constructor(
    private servRedes: ContactoService
  ){}
  ngOnInit(): void {
    this.getDatos();
   }
  getDatos(): void{
    this.servRedes.list().subscribe(
      data =>  this.redes = data)
    }
}
