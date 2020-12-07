import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTurmasPageRoutingModule } from './add-turmas-routing.module';

import { AddTurmasPage } from './add-turmas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTurmasPageRoutingModule
  ],
  declarations: [AddTurmasPage]
})
export class AddTurmasPageModule {}
