import { Component } from '@angular/core';
import { Contacto } from 'src/app/models/contacto';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  redes!: Contacto[];
 
  
  constructor(
    private servRedes: ContactoService,
   
  ){
   
  }
  ngOnInit(): void {
    this.getDatos();
   
   }
  getDatos(): void{
    this.servRedes.list().subscribe(
      data =>  this.redes = data)
    }
}
