import { Evento } from './evento.model';
import { Usuario } from './usuario.model';
export class CasaDeShow{
  id: number;
  nome: string;
  cep: string;
  endereco: string;
  numero: string;
  cidade: string;
  capacidade: number;
  imagemCasaDeShow: Int8Array;
  imagemEncoded: string;
  usuario: Usuario;
  eventos: Array<Evento>;
}
