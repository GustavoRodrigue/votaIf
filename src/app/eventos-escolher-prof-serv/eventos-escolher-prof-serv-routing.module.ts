import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventosEscolherProfServPage } from './eventos-escolher-prof-serv.page';

const routes: Routes = [
  {
    path: '',
    component: EventosEscolherProfServPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventosEscolherProfServPageRoutingModule {}
