import { Ingresso } from './ingresso.model';
import { Evento } from './evento.model';
import { Usuario } from './usuario.model';
export class Pedido{
  id: number;
  usuario: Usuario;
  total: number;
  dataCompra: Date;
  ingressos: Array<Ingresso>;
  quantidadeIngressos: number;
  evento: Evento;
  dataString: string;
}
