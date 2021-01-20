import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAlunosPageRoutingModule } from './add-alunos-routing.module';

import { AddAlunosPage } from './add-alunos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAlunosPageRoutingModule
  ],
  declarations: [AddAlunosPage]
})
export class AddAlunosPageModule {}
