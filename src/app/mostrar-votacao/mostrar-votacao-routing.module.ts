import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarVotacaoPage } from './mostrar-votacao.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarVotacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarVotacaoPageRoutingModule {}
