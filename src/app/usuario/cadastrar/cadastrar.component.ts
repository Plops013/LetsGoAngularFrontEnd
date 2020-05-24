import { Papel } from './../../shared/models/papel.model';
import { UsuarioService } from './../../shared/services/usuario.service';
import { Usuario } from './../../shared/models/usuario.model';
import { Component, OnInit, enableProdMode } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario = new Usuario();
  usuarios: Usuario[];
  switchPapel: boolean;
  erroMessage: string;
  submitMessage: string;
  usuarioForm: FormGroup;

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.usuario.id = 0;
    this.erroMessage = null;
    this.switchPapel = false;
    this.usuarioService.findAll().subscribe(
      data => { this.usuarios = data; }
    );
  }

  editar(u: Usuario) {
    this.usuario = u;
    this.verificaPapelAlterar();
  }

  setPapel() {
    if (this.switchPapel === true) {
      this.usuario.papel = new Papel(2, 'Organizador');
    } else {
      this.usuario.papel = new Papel(1, 'Cliente');
    }
  }

  onSubmit() {
    this.setPapel();
    console.log(this.usuario);
    if (this.usuario.email === '') {
      this.submitMessage = 'Email é obrigatório meu bom!';
    } else {
      this.usuarioService.save(this.usuario).subscribe(
        data => {
          console.log(data);
          this.refresh();
        },
        error => {
          this.submitMessage = error.error.message;
        }
      );
    }
  }

  excluir(id: number) {
    this.usuarioService.delete(id).subscribe(
      data => {
        this.refresh();
        alert('Usuario excluido com sucesso!');
      },
      error => { this.erroMessage = error.error.message; });
  }

  limpaForm() {
    this.usuario = new Usuario();
    this.switchPapel = false;
    this.usuario.id = 0;
    this.usuarioForm.markAsUntouched();
  }

  refresh() {
    window.location.reload();
  }

  verificaPapelAlterar() {
    if (this.usuario.papel.id === 2) {
      this.switchPapel = true;
    } else {
      this.switchPapel = false;
    }
  }

}
