import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';
import{Observable} from 'rxjs'
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
private apiURL = environments.apiURL;
  constructor(
    private http: HttpClient
  ) { }

  public lista(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.apiURL + 'persona/list');
  }

  public detail(id: number):Observable<Persona>{
  return this.http.get<Persona>(this.apiURL + `persona/detail/${id}`);
  }

  public save(perso: Persona):Observable<any>{
    return this.http.post<any>(this.apiURL + 'persona/create', perso);
    }

  public delete(id: number):Observable<any>{
    return this.http.delete<any>(this.apiURL + `persona/delete/${id}`);
    }

  public edit(perso: Persona):Observable<any>{
    return this.http.put<any>(this.apiURL + 'persona/edit', perso);
    }
}
