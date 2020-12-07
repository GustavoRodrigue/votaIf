import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTurmasPage } from './add-turmas.page';

const routes: Routes = [
  {
    path: '',
    component: AddTurmasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTurmasPageRoutingModule {}
