import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventosTituloPage } from './eventos-titulo.page';

const routes: Routes = [
  {
    path: '',
    component: EventosTituloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventosTituloPageRoutingModule {}
