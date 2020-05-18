import { CasaDeShow } from './casa-de-show.model';
export class Evento{
  id: number;
  nome: string;
  descricao: string;
  dataInicio: Date;
  dataFim: Date;
  quantidadeIngressos: number;
  quantidadeIngressosInicial: number;
  preco: number;
  ingressosVendidos: number;
  casaDeShow: CasaDeShow;
  imagemEncoded: string;
  dataString: string;
  dataInicioString: string;
}
