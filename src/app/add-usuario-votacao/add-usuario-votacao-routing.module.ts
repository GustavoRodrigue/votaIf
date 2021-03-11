import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUsuarioVotacaoPage } from './add-usuario-votacao.page';

const routes: Routes = [
  {
    path: '',
    component: AddUsuarioVotacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddUsuarioVotacaoPageRoutingModule {}
