import { OrganizadoresResolverService } from './organizadores-resolver.service';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
export const CasaDeShowRoutingModule = [
  { path: 'casadeshow/cadastrar'
  , component: CadastrarComponent
  , resolve: {
    organizadores: OrganizadoresResolverService
    }
  },
 ];
