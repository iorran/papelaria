import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListasMateriaisPage } from './listas-materiais.page';
import { SharedModule } from '../shared/shared.module';
import { EscolaService } from '../escolas/shared/services/escola.service';
import { ListaMaterialListComponent } from './lista-material-list/lista-material-list.component';

const routes: Routes = [
  { path: '', component: ListasMateriaisPage }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListasMateriaisPage, ListaMaterialListComponent],
  providers: [EscolaService]
})
export class ListasMateriaisPageModule { }
