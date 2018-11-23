import { Fornecedor } from './../../../fornecedores/shared/models/fornecedor.model';
import { Produto } from './../../../produtos/shared/models/produto.model';

export interface Orcamento {
    id?: string;
    produto: Produto;
    fornecedor: Fornecedor;
    valor: number;
    quantidade: number;
    condicao: string;
    createdAt: Date;
}
