import { Pedido } from './../../shared/models/pedido.model';
import { PedidoService } from './../../shared/services/pedido.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pedido',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  constructor(private pedidoService: PedidoService) { }

  pedidos: Pedido[];

  ngOnInit(): void {
  this.pedidoService.findAll().subscribe( data => {
    this.pedidos = data;
  });
  }

}
