import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrcamentosPage } from './orcamentos.page';
import { OrcamentoSearchComponent } from './orcamento-search/orcamento-search.component';
import { OrcamentoRankingComponent } from './orcamento-ranking/orcamento-ranking.component';
import { OrcamentoDetailComponent } from './orcamento-detail/orcamento-detail.component';
import { OrcamentoProdutosComponent } from './orcamento-produtos/orcamento-produtos.component';

const routes: Routes = [
  {
    path: '',
    component: OrcamentosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrcamentosPage, OrcamentoSearchComponent, OrcamentoRankingComponent,
    OrcamentoDetailComponent, OrcamentoProdutosComponent]
})
export class OrcamentosPageModule { }
