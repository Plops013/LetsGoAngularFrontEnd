import { DetalhesComponent } from './detalhes/detalhes.component';
import { Component } from '@angular/core';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
export const EventoRoutingModule = [
  { path: 'evento/cadastrar', component: CadastrarComponent},
  { path: 'evento/detalhes/:id', component: DetalhesComponent}
 ];
