import { UsuarioService } from './../shared/services/usuario.service';
import { Usuario } from './../shared/models/usuario.model';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OrganizadoresResolverService implements Resolve<Usuario[]> {
  constructor(private usuarioService: UsuarioService, private router: Router){
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Usuario[]>{
    return this.usuarioService.findAll();
  }
}
