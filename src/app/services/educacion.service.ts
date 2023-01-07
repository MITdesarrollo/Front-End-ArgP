import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from 'src/environments/environments';
import { Educacion } from '../models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  private apiURL = environments.apiURL;
  
  constructor( private http: HttpClient) { }

  public list(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.apiURL + 'educacion/list');
  }
  public  detail(id:number):Observable<Educacion>{
    return this.http.get<Educacion>(this.apiURL + `educacion/detail/${id}`);
  }
  public save(edu : Educacion):Observable<any>{
    return this.http.post<any>(this.apiURL +'educacion/create', edu);
  }
  public edit(edu : Educacion):Observable<any>{
    return this.http.put<any>(this.apiURL +'educacion/edit', edu);
  }
  public delete(id:number):Observable<any>{
    return this.http.delete<any>(this.apiURL + `educacion/delete/${id}`);
  }
}
