import { Evento } from './../models/evento.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/evento';
  }

  public findAll(): Observable<Evento[]>{
    return this.http.get<Evento[]>(this.url);
  }

  public findById(id: number): Observable<Evento>{
    return this.http.get<Evento>(this.url + '/' + id);
  }

  public save(evento: Evento): Observable<Evento>{
    return this.http.post<Evento>(this.url, evento);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete(this.url + '/' + id);
  }

  public update(evento: Evento): Observable<Evento>{
    return this.http.put<Evento>(this.url, evento);
  }
}
