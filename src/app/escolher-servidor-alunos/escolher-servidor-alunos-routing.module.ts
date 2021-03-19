import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscolherServidorAlunosPage } from './escolher-servidor-alunos.page';

const routes: Routes = [
  {
    path: '',
    component: EscolherServidorAlunosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscolherServidorAlunosPageRoutingModule {}
