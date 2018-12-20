import { EscolaService } from './shared/services/escola.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscolasPage } from './escolas.page';
import { EscolaListComponent } from './escola-list/escola-list.component';
import { SharedModule } from '../shared/shared.module';
import { EscolaDetailComponent } from './escola-detail/escola-detail.component';

const routes: Routes = [
  { path: '', component: EscolasPage },
  { path: 'add', component: EscolaDetailComponent },
  { path: 'edit/:id', component: EscolaDetailComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EscolasPage, EscolaListComponent, EscolaDetailComponent],
  providers: [EscolaService]
})
export class EscolasPageModule {}
