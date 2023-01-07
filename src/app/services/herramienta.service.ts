import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from 'src/environments/environments';
import { Herramienta } from '../models/herramienta';

@Injectable({
  providedIn: 'root'
})
export class HerramientaService {

  private apiURL = environments.apiURL;
  
  constructor( private http: HttpClient) { }

  public list(): Observable<Herramienta[]>{
    return this.http.get<Herramienta[]>(this.apiURL + 'herramienta/list');
  }
  public  detail(id:number):Observable<Herramienta>{
    return this.http.get<Herramienta>(this.apiURL + `herramienta/detail/${id}`);
  }
  public save(herramienta : Herramienta):Observable<any>{
    return this.http.post<any>(this.apiURL +'herramienta/create', herramienta);
  }
  public edit(herramienta : Herramienta):Observable<any>{
    return this.http.put<any>(this.apiURL +'herramienta/edit', herramienta);
  }
  public delete(id:number):Observable<any>{
    return this.http.delete<any>(this.apiURL + `herramienta/delete/${id}`);
  }
}
