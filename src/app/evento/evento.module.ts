import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CadastrarComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class EventoModule { }
