import { Evento } from './../shared/models/evento.model';
import { EventoService } from './../shared/services/evento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private eventoService: EventoService) { }

  array = [1, 2, 3, 4, 5, 6, 7];
  eventos: Evento[];

  ngOnInit(): void {
    this.eventoService.findAll().subscribe(
      data => this.eventos = data
    );
  }

}
