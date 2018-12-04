import { ListaProduto } from './lista-produto.model';

export interface Escola {
    id?: string;
    nome: string;
    listas: ListaProduto[];
}
