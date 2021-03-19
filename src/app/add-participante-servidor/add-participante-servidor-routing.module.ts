import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddParticipanteServidorPage } from './add-participante-servidor.page';

const routes: Routes = [
  {
    path: '',
    component: AddParticipanteServidorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddParticipanteServidorPageRoutingModule {}
