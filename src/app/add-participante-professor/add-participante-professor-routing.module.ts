import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddParticipanteProfessorPage } from './add-participante-professor.page';

const routes: Routes = [
  {
    path: '',
    component: AddParticipanteProfessorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddParticipanteProfessorPageRoutingModule {}
