import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarAlunosPage } from './mostrar-alunos.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarAlunosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarAlunosPageRoutingModule {}
