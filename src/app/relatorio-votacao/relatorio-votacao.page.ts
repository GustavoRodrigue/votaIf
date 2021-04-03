import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ToastController, AlertController } from '@ionic/angular';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-relatorio-votacao',
  templateUrl: './relatorio-votacao.page.html',
  styleUrls: ['./relatorio-votacao.page.scss'],
})
export class RelatorioVotacaoPage implements OnInit {

  dados: any = [];
  id: string = "";
  limit: number = 15;
  start: number = 0;
  idUsuario: string;
  cpfLogin: string;
  dadosLogin: any;
  selecionado: string;
  voto: string = "";
  status: boolean;
  nome: string;

  constructor(
    private storage: NativeStorage, private actRouter: ActivatedRoute, private router: Router, private provider: Post, public toastController: ToastController, public alertController: AlertController
  ) {

  }

  ionViewWillEnter() {
    this.storage.getItem('session_storage').then((res) => {
      this.dadosLogin = res;
      this.cpfLogin = this.dadosLogin.cpf;
      this.idUsuario = this.dadosLogin.id;

    });

    this.dados = [];
    this.start = 0;
    this.carregar();
    


  }

  segmentChanged(event) {

   

    this.selecionado = event.target.value;
    if (this.selecionado == "todas") {
      this.voto = "todas";
      this.carregar();
    
    } else if (this.selecionado == "votou") {
      this.voto = "votou";
      this.carregar();

    } else if (this.selecionado == "naoVotou") {
      this.voto = "naoVotou";
      this.carregar();

    }
    
  }
  criadorVotacao() {
    this.router.navigate(['/tabs/criador-votacao'])
  }



  ngOnInit() {
    //recupera para editar
    this.actRouter.params.subscribe((data: any) => {
      this.id = data.id;
    });

  }

  carregar() {
    
    return new Promise(resolve => {
      this.dados = [];
      let dados = {
        requisicao: 'listar_dados_votacao',
        id: this.id,
        usuario: this.idUsuario,
        votou: this.voto,
        limit: this.limit,
        status: this.status,
        start: this.start,
        nome: this.nome,
      };

      this.provider.dadosApi(dados, 'apiRelatorio.php').subscribe(data => {

        if (data['result'] == '0') {
          this.ionViewWillEnter();
        } else {
         
          for (let dado of data['result']) {
            this.dados.push(dado);
          }
        }

        resolve(true);
      });

    });

  }
  // carregarVotou() {

  //   return new Promise(resolve => {

  //     let dados = {
  //       requisicao: 'listar_dados_votacao_votou',
  //       id: this.id,
  //       usuario: this.idUsuario,
  //       voto: this.voto,
  //       limit: this.limit,
  //       start: this.start,
  //     };

  //     this.provider.dadosApi(dados, 'apiRelatorio.php').subscribe(data => {

  //       if (data['result'] == '0') {
  //         this.ionViewWillEnter();
  //       } else {
         
  //         for (let dado of data['result']) {
  //           this.dados.push(dado);
  //         }
  //       }

  //       resolve(true);
  //     });

  //   });

  // }
  // carregarNao() {

  //   return new Promise(resolve => {

  //     let dados = {
  //       requisicao: 'listar_dados_votacao_nao',
  //       id: this.id,
  //       usuario: this.idUsuario,
  //       voto: this.voto,
  //       limit: this.limit,
  //       start: this.start,
  //     };

  //     this.provider.dadosApi(dados, 'apiRelatorio.php').subscribe(data => {

  //       if (data['result'] == '0') {
  //         this.ionViewWillEnter();
  //       } else {
         
  //         for (let dado of data['result']) {
  //           this.dados.push(dado);
  //         }
  //       }

  //       resolve(true);
  //     });

  //   });

  // }



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


