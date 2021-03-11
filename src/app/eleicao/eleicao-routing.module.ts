import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EleicaoPage } from './eleicao.page';

const routes: Routes = [
  {
    path: '',
    component: EleicaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EleicaoPageRoutingModule {}
