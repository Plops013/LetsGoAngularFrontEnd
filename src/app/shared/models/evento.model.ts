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
  imagemEncode: any;
  dataString: string;
  imagemEvento: Blob;
  dataInicioString: string;
}
