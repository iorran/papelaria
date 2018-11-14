import { Fornecedor } from './../../../fornecedores/shared/models/fornecedor.model';
import { Produto } from './../../../produtos/shared/models/produto.model';

export interface Orcamento {
    id?: string;
    produto: Produto;
    fornecedor: Fornecedor;
    valor: number;
    createdAt: Date;
}
