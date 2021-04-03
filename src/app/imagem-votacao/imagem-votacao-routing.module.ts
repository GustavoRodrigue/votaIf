import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImagemVotacaoPage } from './imagem-votacao.page';

const routes: Routes = [
  {
    path: '',
    component: ImagemVotacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImagemVotacaoPageRoutingModule {}
