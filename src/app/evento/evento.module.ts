import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { FormsModule } from '@angular/forms';
import { DetalhesComponent } from './detalhes/detalhes.component';


@NgModule({
  declarations: [CadastrarComponent, DetalhesComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class EventoModule { }
