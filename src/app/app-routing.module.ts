import { UsuarioRoutingModule } from './usuario/usuario-routing.module';
import { EventoRoutingModule } from './evento/evento-routing.module';
import { CasaDeShowRoutingModule } from './casa-de-show/casa-de-show-routing.module';
import { CadastrarComponent } from './evento/cadastrar/cadastrar.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'home' , component: HomeComponent },
  { path: 'evento/cadastrar', component: CadastrarComponent},
  ...CasaDeShowRoutingModule,
  ...EventoRoutingModule,
  ...UsuarioRoutingModule
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
