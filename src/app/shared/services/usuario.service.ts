import { Usuario } from './../models/usuario.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/usuario';
  }

  public save(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.url, usuario);
  }

  public update(usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(this.url, usuario);
  }

  public findAll(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url);
  }

  public findOrganizadores(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url + '/organizadores');
  }

  public delete(id: number): Observable<any>{
    console.log(this.url + '/' + id);
    return this.http.delete(this.url + '/' + id);
  }

}
