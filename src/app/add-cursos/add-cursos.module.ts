import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCursosPageRoutingModule } from './add-cursos-routing.module';

import { AddCursosPage } from './add-cursos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCursosPageRoutingModule
  ],
  declarations: [AddCursosPage]
})
export class AddCursosPageModule {}
