import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrcamentosPage } from './orcamentos.page';
import { OrcamentoSearchComponent } from './orcamento-search/orcamento-search.component';
import { OrcamentoRankingComponent } from './orcamento-ranking/orcamento-ranking.component';
import { OrcamentoDetailComponent } from './orcamento-detail/orcamento-detail.component';
import { IonicSelectableModule } from 'ionic-selectable';
import { OrcamentoProdutoComponent } from './orcamento-produto/orcamento-produto.component';
import { ToastService } from '../shared/services/toast.service';
import { TranslateModule } from '@ngx-translate/core';

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
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    IonicSelectableModule,
    TranslateModule.forChild()
  ],
  declarations: [OrcamentosPage, OrcamentoSearchComponent, OrcamentoRankingComponent,
    OrcamentoDetailComponent,
    OrcamentoProdutoComponent],
  providers: [ToastService]
})
export class OrcamentosPageModule { }
