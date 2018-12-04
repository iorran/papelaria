import { TipoTurma } from './tipo-turma.enum';
import { Turma } from './turma.enum';

export interface ListaProduto {
    id?: string;
    ano: number;
    turma: Turma;
    tipoTurma: TipoTurma;
    createdAt: Date;
}
