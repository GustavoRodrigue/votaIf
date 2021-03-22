import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventosEscolherRepresentanteTurmaPage } from './eventos-escolher-representante-turma.page';

const routes: Routes = [
  {
    path: '',
    component: EventosEscolherRepresentanteTurmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventosEscolherRepresentanteTurmaPageRoutingModule {}
