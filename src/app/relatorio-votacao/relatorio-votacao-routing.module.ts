import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelatorioVotacaoPage } from './relatorio-votacao.page';

const routes: Routes = [
  {
    path: '',
    component: RelatorioVotacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelatorioVotacaoPageRoutingModule {}
