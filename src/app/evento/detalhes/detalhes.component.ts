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

  constructor(private route: ActivatedRoute, private eventoService: EventoService) { }

  idEvento: number;
  evento: Evento;

  ngOnInit(): void {
    this.route.params.subscribe( data =>
      { this.idEvento = data.id; });
    this.eventoService.findById(this.idEvento).subscribe( data => {
      this.evento = data;
    });
  }

}
