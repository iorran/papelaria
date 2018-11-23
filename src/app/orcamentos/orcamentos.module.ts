import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrcamentosPage } from './orcamentos.page';
import { OrcamentoSearchComponent } from './orcamento-search/orcamento-search.component';
import { OrcamentoRankingComponent } from './orcamento-ranking/orcamento-ranking.component';
import { OrcamentoDetailComponent } from './orcamento-detail/orcamento-detail.component';
import { OrcamentoProdutoComponent } from './orcamento-produto/orcamento-produto.component';

const routes: Routes = [
  {
    path: '',
    component: OrcamentosPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrcamentosPage, OrcamentoSearchComponent, OrcamentoRankingComponent,
    OrcamentoDetailComponent,
    OrcamentoProdutoComponent]
})
export class OrcamentosPageModule { }
