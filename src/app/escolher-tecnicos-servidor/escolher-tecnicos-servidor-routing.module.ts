import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscolherTecnicosServidorPage } from './escolher-tecnicos-servidor.page';

const routes: Routes = [
  {
    path: '',
    component: EscolherTecnicosServidorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscolherTecnicosServidorPageRoutingModule {}
