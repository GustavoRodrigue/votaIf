import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddUsuarioVotacaoPage } from '../add-usuario-votacao/add-usuario-votacao.page';

@Component({
  selector: 'app-eleicao',
  templateUrl: './eleicao.page.html',
  styleUrls: ['./eleicao.page.scss'],
})
export class EleicaoPage implements OnInit {

  constructor(public modalController: ModalController) {
  }
  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddUsuarioVotacaoPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }


}
