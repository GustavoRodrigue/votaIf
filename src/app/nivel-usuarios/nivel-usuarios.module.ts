import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NivelUsuariosPageRoutingModule } from './nivel-usuarios-routing.module';

import { NivelUsuariosPage } from './nivel-usuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NivelUsuariosPageRoutingModule
  ],
  declarations: [NivelUsuariosPage]
})
export class NivelUsuariosPageModule {}
