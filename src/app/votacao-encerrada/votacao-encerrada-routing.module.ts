import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VotacaoEncerradaPage } from './votacao-encerrada.page';

const routes: Routes = [
  {
    path: '',
    component: VotacaoEncerradaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VotacaoEncerradaPageRoutingModule {}
