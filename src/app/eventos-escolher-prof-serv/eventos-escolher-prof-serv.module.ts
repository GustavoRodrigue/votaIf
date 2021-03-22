import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventosEscolherProfServPageRoutingModule } from './eventos-escolher-prof-serv-routing.module';

import { EventosEscolherProfServPage } from './eventos-escolher-prof-serv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventosEscolherProfServPageRoutingModule
  ],
  declarations: [EventosEscolherProfServPage]
})
export class EventosEscolherProfServPageModule {}
