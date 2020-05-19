import { PedidoService } from './../../shared/services/pedido.service';
import { Pedido } from './../../shared/models/pedido.model';
import { Usuario } from './../../shared/models/usuario.model';
import { UsuarioService } from './../../shared/services/usuario.service';
import { Evento } from './../../shared/models/evento.model';
import { EventoService } from './../../shared/services/evento.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  constructor(private route: ActivatedRoute
            , private eventoService: EventoService
            , private usuarioService: UsuarioService
            , private pedidoService: PedidoService
            , private router: Router) { }

  idEvento: number;
  evento: Evento;
  usuarios: Usuario[];
  idUsuario: number;
  pedido = new Pedido();
  mensagemErro: string;

  ngOnInit(): void {
    this.route.params.subscribe( data =>
      { this.idEvento = data.id; });
    this.eventoService.findById(this.idEvento).subscribe( data => {
      this.evento = data;
      this.pedido.evento = data;
    });
    this.usuarioService.findAll().subscribe( data => {
      this.usuarios = data;
    });
    this.idUsuario = 0;
  }

  onSubmit(){
    if (this.validaInputs()){
      const usuario = new Usuario();
      usuario.id = this.idUsuario;
      this.pedido.usuario = usuario;
      this.pedidoService.save(this.pedido).subscribe(
        data => {this.goToPedidos(); },
        error => { this.mensagemErro = error.error.message; }
      );
    } else {
      this.mensagemErro = 'Por favor escolha um usuario valido';
    }
  }

  validaInputs(): boolean{
    if ( this.idUsuario === 0){
      return false;
    } else if (this.pedido.quantidadeIngressos < 1 && this.pedido.quantidadeIngressos > 4){
      return false;
    } else {
      return true;
    }
  }

  goToPedidos(){
    this.router.navigate(['/pedido/listar']);
  }

}
