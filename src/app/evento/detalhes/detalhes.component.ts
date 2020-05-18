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
            , private usuarioService: UsuarioService) { }

  idEvento: number;
  evento: Evento;
  usuarios: Usuario[];
  idUsuario = 0;

  ngOnInit(): void {
    this.route.params.subscribe( data =>
      { this.idEvento = data.id; });
    this.eventoService.findById(this.idEvento).subscribe( data => {
      this.evento = data;
    });
    this.usuarioService.findAll().subscribe( data => {
      this.usuarios = data;
      this.idUsuario = data[0].id;
    });
  }

  onSubmit(){
  }

}
