import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSkillComponent } from './components/herramientas/add-skill/add-skill.component';
import { EditSkillComponent } from './components/herramientas/edit-skill/edit-skill.component';
import { HomeComponent } from './components/home/home.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { StackComponent } from './components/herramientas/stack/stack.component';
import { DatosComponent } from './components/sobre-mi/datos/datos.component';
import { EditDatosComponent } from './components/sobre-mi/edit-datos/edit-datos.component';
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
import { AddDatosComponent } from './components/sobre-mi/add-datos/add-datos.component';
import { LoginComponent } from './components/login/login.component';
import { AutenticacionGuard } from './guards/autenticacion.guard';

const routes : Routes = [
  {path:'login', component: LoginComponent},
  
  {path:'home' , component: HomeComponent, canActivate: [AutenticacionGuard] }, 
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'sobre-mi', component: DatosComponent, canActivate: [AutenticacionGuard]},
  {path: 'sobre-mi', children:[
    {path: 'edit-datos', component: EditDatosComponent},
    {path: 'add-datos', component: AddDatosComponent}
  ]},
 
  {path:'estudios', component: EstudioComponent, canActivate: [AutenticacionGuard]},
  {path:'estudios', children:[
    {path: 'add-estudio', component: AddEstudioComponent},
    {path: 'edit-estudio', component: EditEstudioComponent}
  ]},
  {path:'contacto', component: RedComponent, canActivate: [AutenticacionGuard]},
  {path:'contacto', children:[
    {path: 'add-red', component: AddRedComponent},
    {path: 'edit-red', component: EditRedComponent}
  ]},
  {path:'proyectos', component: ProyectoComponent, canActivate: [AutenticacionGuard]},
  {path:'proyectos', children:[
    {path: 'add-prod', component: AddProyectoComponent},
    {path: 'edit-prod', component: EditProyectoComponent}
  ]},
  {path:'exp', component: ExpComponent, canActivate: [AutenticacionGuard]},
  {path:'exp', children:[
    {path: 'add-exp', component: AddExpComponent},
    {path: 'edit-exp', component: EditExpComponent}
  ]},
  {path: 'stack', component: StackComponent, canActivate: [AutenticacionGuard]},
  {path: 'stack', children:[
  {path: 'add-skill', component: AddSkillComponent},
  {path: 'edit-skill', component: EditSkillComponent} 
  ]},
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: '**', component: Pagina404Component} 
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
