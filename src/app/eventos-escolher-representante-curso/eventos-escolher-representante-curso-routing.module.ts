import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventosEscolherRepresentanteCursoPage } from './eventos-escolher-representante-curso.page';

const routes: Routes = [
  {
    path: '',
    component: EventosEscolherRepresentanteCursoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventosEscolherRepresentanteCursoPageRoutingModule {}
