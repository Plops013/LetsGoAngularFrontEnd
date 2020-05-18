import { Papel } from './papel.model';
import { CasaDeShow } from './casa-de-show.model';

export class Usuario {
  id: number;
  nome: string;
  sobrenome: string;
  email: string;
  telefone: string;
  senha: string;
  dataNascimento: Date;
  papel: Papel;
  casaDeShow: Array<CasaDeShow>;
  dataString: string;
}
