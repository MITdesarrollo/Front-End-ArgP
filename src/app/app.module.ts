import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StackComponent } from './components/herramientas/stack/stack.component';
import { AppRoutingModule } from './app-routing.module';
import { AddSkillComponent } from './components/herramientas/add-skill/add-skill.component';
import { HomeComponent } from './components/home/home.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { LoginComponent } from './components/login/login.component';
import { EditSkillComponent } from './components/herramientas/edit-skill/edit-skill.component';
import { ExpComponent } from './components/experiencias/exp/exp.component';
import { AddExpComponent } from './components/experiencias/add-exp/add-exp.component';
import { EditExpComponent } from './components/experiencias/edit-exp/edit-exp.component';
import { EstudioComponent } from './components/estudios/estudio/estudio.component';
import { AddEstudioComponent } from './components/estudios/add-estudio/add-estudio.component';
import { EditEstudioComponent } from './components/estudios/edit-estudio/edit-estudio.component';
import { RedComponent } from './components/contacto/red/red.component';
import { AddRedComponent } from './components/contacto/add-red/add-red.component';
import { EditRedComponent } from './components/contacto/edit-red/edit-red.component';
import { ProyectoComponent } from './components/proyectos/proyecto/proyecto.component';
import { AddProyectoComponent } from './components/proyectos/add-proyecto/add-proyecto.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto/edit-proyecto.component';
import { DatosComponent } from './components/sobre-mi/datos/datos.component';
import { EditDatosComponent } from './components/sobre-mi/edit-datos/edit-datos.component';
import { AddDatosComponent } from './components/sobre-mi/add-datos/add-datos.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {BooleanTextPipe} from './pipes/boolean-text.pipe'



@NgModule({
  declarations: [
    AppComponent,

    StackComponent,
    AddSkillComponent,
    EditSkillComponent,

    ExpComponent,
    AddExpComponent,
    EditExpComponent,

    EstudioComponent,
    AddEstudioComponent,
    EditEstudioComponent,

    RedComponent,
    AddRedComponent,
    EditRedComponent,

    ProyectoComponent,
    AddProyectoComponent,
    EditProyectoComponent,

    DatosComponent,
    AddDatosComponent,
    EditDatosComponent,
    
    HomeComponent,
    Pagina404Component,
    HeaderComponent,
    BannerComponent,
    LoginComponent,
    
    SidenavComponent,
    BooleanTextPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
