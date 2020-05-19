import { Observable } from 'rxjs';
import { Pedido } from './../models/pedido.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/pedido';
   }

  findAll(): Observable<Pedido[]>{
    return this.http.get<Pedido[]>(this.url);
  }

  save(pedido: Pedido): Observable<Pedido>{
    return this.http.post<Pedido>(this.url, pedido);
  }
}
