import { EventoService } from './../../shared/services/evento.service';
import { CasaDeShowService } from './../../shared/services/casa-de-show.service';
import { CasaDeShow } from './../../shared/models/casa-de-show.model';
import { Evento } from './../../shared/models/evento.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  imagePath: any;
  message: string;
  evento = new Evento();
  imagemArray = new Int8Array();
  casas: CasaDeShow[];
  eventos: Evento[];
  idCasa = 0;

  constructor(private casaDeShowService: CasaDeShowService
            , private eventoService: EventoService) { }

  ngOnInit(): void {
    this.casaDeShowService.findAll().subscribe(
      data => this.casas = data
    );
    this.eventoService.findAll().subscribe(
      data => this.eventos = data
    );
  }

  excluir(){
  }

  editar(){
  }

  onSubmit() {
    console.log(this.evento);
  }


  preview(files: any) {
    if (files.length === 0) {
      return;
    }
    const mimeType = files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.evento.imagemEncode  = reader.result;
    };
    console.log(this.imagePath);
    console.log(this.evento);
  }
}
