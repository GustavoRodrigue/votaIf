import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCursosPage } from './add-cursos.page';

const routes: Routes = [
  {
    path: '',
    component: AddCursosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCursosPageRoutingModule {}
