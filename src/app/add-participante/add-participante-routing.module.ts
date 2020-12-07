import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddParticipantePage } from './add-participante.page';

const routes: Routes = [
  {
    path: '',
    component: AddParticipantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddParticipantePageRoutingModule {}
