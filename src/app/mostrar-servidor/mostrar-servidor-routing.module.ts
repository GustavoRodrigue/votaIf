import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarServidorPage } from './mostrar-servidor.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarServidorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarServidorPageRoutingModule {}
