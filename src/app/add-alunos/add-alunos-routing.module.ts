import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAlunosPage } from './add-alunos.page';

const routes: Routes = [
  {
    path: '',
    component: AddAlunosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAlunosPageRoutingModule {}
