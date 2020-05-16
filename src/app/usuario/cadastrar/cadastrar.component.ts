import { Usuario } from './../../shared/models/usuario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario = new Usuario();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
