import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environments } from 'src/environments/environments';
import { Sesion } from '../models/sesion';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

 public enableEdit: boolean = false;

  sesionSubject!: BehaviorSubject<Sesion>;
  
  constructor(
    private http: HttpClient,
    private router : Router
  ) {
    const sesion: Sesion = {
      sesionActiva: false,
    };
    this.sesionSubject = new BehaviorSubject(sesion);
    
   }

  private apiURL = environments.apiURL;

  public lista(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.apiURL + 'usuario/list');
  }

  public detail(id: number):Observable<Usuario>{
  return this.http.get<Usuario>(this.apiURL + `usuario/detail/${id}`);
  }

  public save(user: Usuario):Observable<any>{
    return this.http.post<Usuario>(this.apiURL + 'usuario/create', user);
    }

  public delete(id: number):Observable<Usuario>{
    return this.http.delete<Usuario>(this.apiURL + `usuario/delete/${id}`);
    }

  public edit(user: Usuario):Observable<any>{
    return this.http.put<any>(this.apiURL + 'usuario/edit', user);
    }


  login(email: string | null){
    const sesion: Sesion = {
      sesionActiva: true
    };
    this.sesionSubject.next(sesion);
  }
  checkLocalStorage(){
  let localStoUser = localStorage.getItem('sesion');
  
  
  if(localStoUser){
    localStoUser = JSON.parse(localStoUser)
    this.lista().subscribe(el => {
      let findUser = el.find(el => el.email == localStoUser)
      if(findUser){
        this.login(
          localStoUser
        )
      this.router.navigate(['home'])
      }
      
    })
  }
}
  obtenerDatosSesion(): Observable<Sesion> {
    return this.sesionSubject.asObservable();
  }
  onEdit(): void{
  this.enableEdit = !this.enableEdit
   }
  }