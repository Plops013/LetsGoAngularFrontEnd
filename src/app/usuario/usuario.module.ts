import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ListarComponent } from './listar/listar.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CadastrarComponent, ListarComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ]
})
export class UsuarioModule { }
