import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarAlunosPageRoutingModule } from './mostrar-alunos-routing.module';

import { MostrarAlunosPage } from './mostrar-alunos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarAlunosPageRoutingModule
  ],
  declarations: [MostrarAlunosPage]
})
export class MostrarAlunosPageModule {}
