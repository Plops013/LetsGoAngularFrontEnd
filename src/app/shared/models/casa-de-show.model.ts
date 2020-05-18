import { Evento } from './evento.model';
import { Usuario } from './usuario.model';
export class CasaDeShow{
  id: number;
  nome: string;
  cep: string;
  endereco: string;
  estado: string;
  numero: string;
  cidade: string;
  capacidade: number;
  usuario = new Usuario();
  eventos: Array<Evento>;
}
