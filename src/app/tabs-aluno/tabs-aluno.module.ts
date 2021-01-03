import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsAlunoPageRoutingModule } from './tabs-aluno-routing.module';

import { TabsAlunoPage } from './tabs-aluno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsAlunoPageRoutingModule
  ],
  declarations: [TabsAlunoPage]
})
export class TabsAlunoPageModule {}
