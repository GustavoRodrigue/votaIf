import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventosResponsavelServidorPage } from './eventos-responsavel-servidor.page';

const routes: Routes = [
  {
    path: '',
    component: EventosResponsavelServidorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventosResponsavelServidorPageRoutingModule {}
