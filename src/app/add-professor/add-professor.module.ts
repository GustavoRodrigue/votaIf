import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddProfessorPageRoutingModule } from './add-professor-routing.module';

import { AddProfessorPage } from './add-professor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddProfessorPageRoutingModule
  ],
  declarations: [AddProfessorPage]
})
export class AddProfessorPageModule {}
