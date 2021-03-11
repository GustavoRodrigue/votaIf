import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddParticipanteTurmaPage } from './add-participante-turma.page';

const routes: Routes = [
  {
    path: '',
    component: AddParticipanteTurmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddParticipanteTurmaPageRoutingModule {}
