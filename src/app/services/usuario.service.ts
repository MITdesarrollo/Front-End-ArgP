import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environments } from 'src/environments/environments';
import { Sesion } from '../models/sesion';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
 
  sesionSubject!: BehaviorSubject<Sesion>;
  constructor(
    private http: HttpClient,
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
    return this.http.put<any>(this.apiURL + 'proyecto/edit', user);
    }
  login(email: string, password: string, id:number){
    const sesion: Sesion = {
      sesionActiva: true
    };
    this.sesionSubject.next(sesion);
  }
  obtenerDatosSesion(): Observable<Sesion> {
    return this.sesionSubject.asObservable();
  }
  }