import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddVotacaoPage } from './add-votacao.page';

const routes: Routes = [
  {
    path: '',
    component: AddVotacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddVotacaoPageRoutingModule {}
