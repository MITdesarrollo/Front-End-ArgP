import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from 'src/environments/environments';
import { Contacto } from '../models/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private apiURL = environments.apiURL;
  
  constructor( private http: HttpClient) { }

  public list(): Observable<Contacto[]>{
    return this.http.get<Contacto[]>(this.apiURL + 'contacto/list');
  }
  public  detail(id:number):Observable<Contacto>{
    return this.http.get<Contacto>(this.apiURL + `contacto/detail/${id}`);
  }
  public save(cont :Contacto):Observable<any>{
    return this.http.post<Contacto>(this.apiURL +'contacto/create', cont);
  }
  public edit(cont : Contacto):Observable<any>{
    return this.http.put<Contacto>(this.apiURL +'contacto/edit', cont);
  }
  public delete(id:number):Observable<any>{
    return this.http.delete<any>(this.apiURL + `contacto/delete/${id}`);
  }
}
