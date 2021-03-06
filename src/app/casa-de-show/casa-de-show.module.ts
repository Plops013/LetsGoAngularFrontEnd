import { NgxViacepModule } from '@brunoc/ngx-viacep';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ListarComponent } from './listar/listar.component';


@NgModule({
  declarations: [CadastrarComponent, ListarComponent],
  imports: [
    CommonModule, FormsModule, NgxViacepModule
  ]
})
export class CasaDeShowModule { }
