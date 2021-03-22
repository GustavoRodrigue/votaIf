import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventosRepresentantePage } from './eventos-representante.page';

const routes: Routes = [
  {
    path: '',
    component: EventosRepresentantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventosRepresentantePageRoutingModule {}
