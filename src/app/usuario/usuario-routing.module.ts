import { ListarComponent } from './listar/listar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
export const UsuarioRoutingModule = [
  { path: 'usuario/cadastrar', component: CadastrarComponent, onSameUrlNavigation: 'reload' },
  { path: 'usuario/listar', component: ListarComponent  }
];
