import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventosResponsavelVotacaoPage } from './eventos-responsavel-votacao.page';

const routes: Routes = [
  {
    path: '',
    component: EventosResponsavelVotacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventosResponsavelVotacaoPageRoutingModule {}
