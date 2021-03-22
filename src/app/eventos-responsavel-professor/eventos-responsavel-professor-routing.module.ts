import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventosResponsavelProfessorPage } from './eventos-responsavel-professor.page';

const routes: Routes = [
  {
    path: '',
    component: EventosResponsavelProfessorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventosResponsavelProfessorPageRoutingModule {}
