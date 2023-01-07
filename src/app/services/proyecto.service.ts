import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from 'src/environments/environments';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private apiURL = environments.apiURL;

  constructor(
    private http: HttpClient
  ) { }
  public lista(): Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.apiURL + 'proyecto/list');
  }

  public detail(id: number):Observable<Proyecto>{
  return this.http.get<Proyecto>(this.apiURL + `proyecto/detail/${id}`);
  }

  public save(proyecto: Proyecto):Observable<any>{
    return this.http.post<Proyecto>(this.apiURL + 'proyecto/create', proyecto);
    }

  public delete(id: number):Observable<any>{
    return this.http.delete<any>(this.apiURL + `proyecto/delete/${id}`);
    }

  public edit(proyecto: Proyecto):Observable<any>{
    return this.http.put<any>(this.apiURL + 'proyecto/edit', proyecto);
    }
}
