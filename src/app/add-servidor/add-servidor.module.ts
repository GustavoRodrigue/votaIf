import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddServidorPageRoutingModule } from './add-servidor-routing.module';

import { AddServidorPage } from './add-servidor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddServidorPageRoutingModule
  ],
  declarations: [AddServidorPage]
})
export class AddServidorPageModule {}
