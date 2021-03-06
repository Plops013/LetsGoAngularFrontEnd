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
  deleteErro: string;

  constructor(private casaDeShowService: CasaDeShowService
            , private eventoService: EventoService) { }

  ngOnInit(): void {
    this.casaDeShowService.findAll().subscribe(
      data => this.casas = data
    );
    this.eventoService.findAll().subscribe(
      data => this.eventos = data
    );
    this.evento.id = 0;
  }

  setCasaId() {
    const casaDeShow = new CasaDeShow();
    casaDeShow.id = this.idCasa;
    this.evento.casaDeShow = casaDeShow;
  }

  save() {
    this.eventoService.save(this.evento).subscribe(
      data => this.refresh()
    );
  }

  excluir(id: number) {
    this.eventoService.delete(id).subscribe(
      data => { this.refresh(); },
      error => {
      this.deleteErro += error.error.message;
      setTimeout(() => { this.deleteErro = null; }, 5000);
      }
    );
  }

  editar(editEvento: Evento) {
    this.evento = editEvento;
    this.idCasa = editEvento.casaDeShow.id;
  }

  onSubmit() {
    if (this.evento.id !== 0) {
      this.setCasaId();
      this.edit();
    } else {
      this.setCasaId();
      this.save();
    }
  }

  edit(){
    this.eventoService.update(this.evento).subscribe( data => {
      console.log(this.evento);
      this.refresh();
    });
  }

  refresh() {
    window.location.reload();
  }

  resetForm(){
    this.evento = new Evento();
    this.evento.id = 0;
    this.idCasa = 0;
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
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.evento.imagemEncoded = reader.result.toString();
    };
    console.log(this.evento);
  }
}
