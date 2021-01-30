import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarServidorPageRoutingModule } from './mostrar-servidor-routing.module';

import { MostrarServidorPage } from './mostrar-servidor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarServidorPageRoutingModule
  ],
  declarations: [MostrarServidorPage]
})
export class MostrarServidorPageModule {}
