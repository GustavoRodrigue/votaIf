import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-participante',
  templateUrl: './participante.page.html',
  styleUrls: ['./participante.page.scss'],
})
export class ParticipantePage implements OnInit {

  participantes: any = [];
  votantes: any=[];
  limit: number = 15;
  start: number = 0;
  idCurso: string = "";
  nomeCurso: string = "";
  nomeTurma: string = "";
  idTurma: string = "";
  status: boolean;
  idUsuario: string = "";
  nomeUsuario: string = "";
  nivel: string = "";
  usuario: number = 0;
  sala: number = 0;

  constructor(private router: Router, private provider: Post, public toastController: ToastController, public alertController: AlertController) {

  }
  ngOnInit() {
    this.carregar();
    this.carregarVotante();
  }
  voltar(){
    this.router.navigate(['/eleicao'])
   }

  ionViewWillEnter() {
    this.votantes = [];
    this.participantes = [];
    this.start = 0;
    if(this.sala == 1){
      this.carregar();
    }
    if(this.usuario == 1){
      this.carregarVotante();
    }
  }



  AddParticipante() {
    this.router.navigate(['/escolher-servidor-alunos']);
  }
  votacao() {
    this.router.navigate(['/votacao']);
  }
  carregarVotante() {
    return new Promise(resolve => {
      this.participantes = [];
      let dados = {
        requisicao: 'buscar-votantes',
        id: this.idUsuario,
        nome: this.nomeUsuario,
        nivel: this.nivel,
        limit: this.limit,
        start: this.start
      };
      this.provider.dadosApi(dados, 'apiVot.php').subscribe(data => {
        if (data['result'] == '0') {
          this.usuario = 1;
          this.ionViewWillEnter();

        } else {
         
          for (let votante of data['result']) {
            this.votantes.push(votante);
            
          }
        }

        resolve(true);
      });
    });
  }
  carregar() {
    return new Promise(resolve => {
      this.participantes = [];
      let dados = {
        requisicao: 'buscar-participante',
        idCurso: this.idCurso,
        idTurma: this.idTurma,
        nomeC: this.nomeCurso,
        nomeT: this.nomeTurma,
        status: this.status,
        limit: this.limit,
        start: this.start
      };
      this.provider.dadosApi(dados, 'apiVot.php').subscribe(data => {
        if (data['result'] == '0') {
          this.sala = 1;
          this.ionViewWillEnter();

        } else {
       
          for (let participante of data['result']) {
            this.participantes.push(participante);


          }
        }

        resolve(true);
      });
    });
  }

  aprovar(id) {
    return new Promise(resolve => {

      let dados = {
        requisicao: 'aprovar_usuarios',
        id: id,

      };

      this.provider.dadosApi(dados, 'api.php').subscribe(data => {
        this.ionViewWillEnter();
      });
    });
  }

  excluir(id) {
    return new Promise(resolve => {
      let dados = {
        requisicao: 'excluir',
        id: id
      };
      this.provider.dadosApi(dados, 'api.php').subscribe(data => {
        this.ionViewWillEnter();

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

  async presentAlertConfirm(id) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Aviso!!',
      message: 'Deseja excluir ?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.ionViewWillEnter();
          }
        }, {
          text: 'Sim',
          handler: () => {
            console.log('Confirm Okay');
            this.excluir(id);
          }
        }
      ]
    });

    await alert.present();
  }


}
