import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServidorPageRoutingModule } from './servidor-routing.module';

import { ServidorPage } from './servidor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServidorPageRoutingModule
  ],
  declarations: [ServidorPage]
})
export class ServidorPageModule {}
