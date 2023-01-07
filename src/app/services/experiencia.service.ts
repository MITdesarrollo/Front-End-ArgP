import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from 'src/environments/environments';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private apiURL = environments.apiURL;
  
  constructor( private http: HttpClient) { }

  public list(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.apiURL + 'experiencia/list');
  }
  public  detail(id:number):Observable<Experiencia>{
    return this.http.get<Experiencia>(this.apiURL + `experiencia/detail/${id}`);
  }
  public save(exp : Experiencia):Observable<any>{
    return this.http.post<any>(this.apiURL +'experiencia/create', exp);
  }
  public edit(exp : Experiencia):Observable<any>{
    return this.http.put<any>(this.apiURL +'experiencia/edit', exp);
  }
  public delete(id:number):Observable<any>{
    return this.http.delete<any>(this.apiURL + `experiencia/delete/${id}`);
  }
}
