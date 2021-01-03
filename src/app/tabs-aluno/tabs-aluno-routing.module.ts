import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsAlunoPage } from './tabs-aluno.page';

const routes: Routes = [
  {
    path: '',
    component: TabsAlunoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsAlunoPageRoutingModule {}
