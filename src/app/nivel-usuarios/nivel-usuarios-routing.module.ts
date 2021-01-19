import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NivelUsuariosPage } from './nivel-usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: NivelUsuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NivelUsuariosPageRoutingModule {}
