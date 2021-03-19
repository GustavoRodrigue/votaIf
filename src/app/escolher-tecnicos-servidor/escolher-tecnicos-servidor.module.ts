import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscolherTecnicosServidorPageRoutingModule } from './escolher-tecnicos-servidor-routing.module';

import { EscolherTecnicosServidorPage } from './escolher-tecnicos-servidor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscolherTecnicosServidorPageRoutingModule
  ],
  declarations: [EscolherTecnicosServidorPage]
})
export class EscolherTecnicosServidorPageModule {}
