import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ToastController, AlertController } from '@ionic/angular';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-criador-votacao',
  templateUrl: './criador-votacao.page.html',
  styleUrls: ['./criador-votacao.page.scss'],
})
export class CriadorVotacaoPage implements OnInit {

  id: string;
  curso: string;
  turmas: string;
  nome: string;
  votacoes: any = [];
  limit: number = 15;
  start: number = 0;
  status: boolean;
  statusVotacao: number = 0;
  terminio: string ;
  hora_terminio: string ;



  // aberta: boolean = true;
  // encerrada: boolean = false;
  // todas: boolean = false;

  selecionado: string;
  
  vots: any = [];
  idVotante: string;
  cpf: string;
  nomeV: string;
  vot: string;
  cpfLogin: string;
  dadosLogin: any;
  nivel: string;
  idUsuario: string;

  dataAtual = new Date();
  dia = this.dataAtual.getDate();
  mes = (this.dataAtual.getMonth() + 1);
  ano = this.dataAtual.getFullYear();
  horas = this.dataAtual.getHours();
  minutos = this.dataAtual.getMinutes();
  agora = (this.ano + '-0' + this.mes + '-' + this.dia);
  horas_agora = (this.horas + ':' + this.minutos+":00")


  constructor(private storage: NativeStorage, private router: Router, private provider: Post, public toastController: ToastController, public alertController: AlertController) { }

  ngOnInit() {

  }

  dadosVotacao(id){
    this.router.navigate(['/relatorio-votacao/' + id ]);
  }
  // criarVotacao() {
  //   this.router.navigate(['/add-votacao']);
  // }

  ionViewWillEnter() {
   
    
    this.storage.getItem('session_storage').then((res) => {
      this.dadosLogin = res;
      this.cpfLogin = this.dadosLogin.cpf;
      this.idUsuario = this.dadosLogin.id;
      this.nivel = this.dadosLogin.nivel;

    });
    this.votacoes = [];
    this.start = 0;
    this.carregar();

    // this.carregarVotantes();
    // this.encerrar()
  
  
  }


  segmentChanged(event) {

    this.selecionado = event.target.value;
    if (this.selecionado == "aberta") {
      this.status = false;
      this.carregar();
    
    } else if (this.selecionado == "encerrada") {
      this.status = true;
      this.carregar();

    }
  }



  carregar() {
    return new Promise(resolve => {
      this.votacoes = [];
      let dados = {
        requisicao: 'listar_votacao_criacao',
        id: this.id,
        curso: this.curso,
        turma: this.turmas,
        cpf: this.cpfLogin,
        idUsuario: this.idUsuario,
        terminio: this.terminio,
        hora_terminio: this.hora_terminio,
        limit: this.limit,
        start: this.start,
        status: this.status
      };

      this.provider.dadosApi(dados, 'apiVot.php').subscribe(data => {

        if (data['result'] == '0') {
          this.ionViewWillEnter();
        } else {
          for (let votacao of data['result']) {
            this.votacoes.push(votacao);
            
          }
        }

        resolve(true);

      });
    });

    

  }
  
  
  motrar(id, nome, descricao, tipo, inicio, terminio, status, curso, turma) {
    this.router.navigate(['/mostrar-votacao/' + id + '/' + nome + '/' + descricao + '/' + tipo + '/' + inicio + '/' + terminio + '/' + status + '/' + curso + '/' + turma]);
  }
  excluir(id) {
    return new Promise(resolve => {

      let dados = {
        requisicao: 'excluir_votacao',
        id: id,
      };

      this.provider.dadosApi(dados, 'apiVot.php').subscribe(data => {
        this.ionViewWillEnter();
      });
    });
  }
  encerrar(id) {

    return new Promise(resolve => {

      let dados = {
        requisicao: 'encerrar_votacao',
        id: id,

      };

      this.provider.dadosApi(dados, 'apiVot.php').subscribe(data => {
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
  async encerrarVotacao(id) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Aviso!!',
      message: 'Deseja Encerrar a votacao ?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancelar',
          cssClass: 'secondary',
          handler: (blah) => {
            this.ionViewWillEnter();
          }
        }, {
          text: 'Sim',
          handler: () => {
            console.log('Confirm Okay');
            this.encerrar(id);
          }
        }
      ]
    });

    await alert.present();
  }


}