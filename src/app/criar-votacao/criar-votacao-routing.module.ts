import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarVotacaoPage } from './criar-votacao.page';

const routes: Routes = [
  {
    path: '',
    component: CriarVotacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarVotacaoPageRoutingModule {}
