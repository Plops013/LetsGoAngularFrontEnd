import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ListarComponent } from './listar/listar.component';



@NgModule({
  declarations: [CadastrarComponent, ListarComponent],
  imports: [
    CommonModule
  ]
})
export class UsuarioModule { }
