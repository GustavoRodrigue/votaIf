import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServidorPage } from './servidor.page';

const routes: Routes = [
  {
    path: '',
    component: ServidorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServidorPageRoutingModule {}
