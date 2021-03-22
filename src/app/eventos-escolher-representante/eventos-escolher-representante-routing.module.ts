import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventosEscolherRepresentantePage } from './eventos-escolher-representante.page';

const routes: Routes = [
  {
    path: '',
    component: EventosEscolherRepresentantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventosEscolherRepresentantePageRoutingModule {}
