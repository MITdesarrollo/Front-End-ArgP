import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Sesion } from '../models/sesion';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionGuard implements CanActivate {
  constructor(
    private sesionService: UsuarioService,
    private router: Router
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.sesionService.obtenerDatosSesion().pipe(
      map((sesion: Sesion)=> {
        if(sesion.sesionActiva){
          return true;
        }else{
          this.router.navigate(['login'])
          return false;
        }
      })
    )
  }
  
}
