import { ActivatedRoute } from '@angular/router';
import { CasaDeShowService } from './../../shared/services/casa-de-show.service';
import { Usuario } from './../../shared/models/usuario.model';
import { UsuarioService } from './../../shared/services/usuario.service';
import { CasaDeShow } from './../../shared/models/casa-de-show.model';
import { Component, OnInit } from '@angular/core';
import { NgxViacepService, ErroCep } from '@brunoc/ngx-viacep';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  casaDeShow = new CasaDeShow();
  organizadores: Usuario[];
  casas: CasaDeShow[];
  submitErro: string;
  erroMessage: string;
  idUsuario: number;
  erroCep: string;

  constructor(private usuarioService: UsuarioService
            , private casaDeShowService: CasaDeShowService
            , private route: ActivatedRoute
            , private cepService: NgxViacepService) {
  }

  ngOnInit(): void {
    this.route.data.subscribe((data: { organizadores: Usuario[] }) => {
      console.log(data.organizadores);
      this.organizadores = data.organizadores;
    });
    this.casaDeShow.id = 0;
    this.casaDeShowService.findAll().subscribe(
      data => this.casas = data
    );
  }

  onSubmit(){
    if (this.casaDeShow.id === 0){
    this.casaDeShow.usuario.id = this.idUsuario;
    this.casaDeShowService.save(this.casaDeShow).subscribe(
      data => { this.refresh(); },
      error => this.submitErro = error.error.message
   );
  }else {
    this.casaDeShow.usuario.id = this.idUsuario;
    this.casaDeShowService.update(this.casaDeShow).subscribe(
      data => { this.refresh(); },
      error => { this.submitErro = error.error.message; }
    );
  }
  }

  editar(cs: CasaDeShow){
    this.casaDeShow = cs;
    this.idUsuario = cs.usuario.id;
  }

  resetForm(){
    this.casaDeShow = new CasaDeShow();
    this.casaDeShow.id = 0;
    this.idUsuario = 0;
  }

  excluir(id: string){
    this.casaDeShowService.delete(id).subscribe(
      data => { this.refresh();
                alert('Usuario excluido com sucesso!'); },
      error => { this.erroMessage = error.error.message; });
  }

  refresh() {
    window.location.reload();
  }

  viaCep(cep: string){
    this.cepService.buscarPorCep(cep).then( ( endereco: any ) => {
      this.erroCep = '';
      this.casaDeShow.endereco = endereco.logradouro;
      this.casaDeShow.cidade = endereco.localidade;
      this.casaDeShow.estado = endereco.uf;
    }).catch( (error: ErroCep) => {
      this.erroCep = error.message;
      this.casaDeShow.cep = '';
     });
  }

}
