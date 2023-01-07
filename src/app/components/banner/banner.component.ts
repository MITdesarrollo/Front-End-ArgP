import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit{
datos: Persona [] = [];

   constructor(
    private serviPerso : PersonaService
   ){

}
ngOnInit(): void {
  this.getDatos();
}

getDatos(): void{
  this.serviPerso.lista().subscribe(
    data =>  this.datos = data
  )

}
}
