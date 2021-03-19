import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Post } from 'src/services/post';
import { AddUsuarioVotacaoPage } from '../add-usuario-votacao/add-usuario-votacao.page';

@Component({
  selector: 'app-eleicao',
  templateUrl: './eleicao.page.html',
  styleUrls: ['./eleicao.page.scss'],
})
export class EleicaoPage implements OnInit {
  eleicoes: any = [];
  limit: number = 15;
  start: number = 0;
  nomeUsuario: string = "";
  cpf: string = "";
  idUsuario: string ="";
 
  idVotacao: string = "";

  status : boolean ;
  constructor(public modalController: ModalController, private router: Router, private provider: Post, public toastController: ToastController, public alertController: AlertController) {
  }
  ngOnInit() {
  }
  ionViewWillEnter() {
    
    this.eleicoes = [];
    this.start = 0;
    this.carregar();
  }
  voltar(){
    this.router.navigate(['/tabs/votacao'])
   }

  addUsuarioVotacao(){
    this.router.navigate(['/add-usuario-votacao']);
  }

  avancar(){
    this.router.navigate(['/participante']);
  }

  carregar() {
    return new Promise(resolve => {
      this.eleicoes = [];
      let dados = {
        requisicao: 'listar_eleicao',
        idUsuario: this.idUsuario,
        nome: this.nomeUsuario,
        cpf: this.cpf,
        status: this.status,
        limit: this.limit,
        start: this.start
      };
      this.provider.dadosApi(dados, 'apiVot.php').subscribe(data => {
        if (data['result'] == '0') {
          
          this.ionViewWillEnter();
        
        } else {
          for (let eleicao of data['result']) {
            this.eleicoes.push(eleicao);
            
    
          }
        }

        resolve(true);
      });
    });
  }


   //atualizar o list view
 doRefresh(event) {

  setTimeout(() => {
    this.ionViewWillEnter();
    event.target.complete();
  }, 500);
}


//barra de rolagem
loadData(event) {

  this.start += this.limit;

  setTimeout(() => {
    this.carregar().then(() => {
      event.target.complete();
    });

  }, 500);
}


}
