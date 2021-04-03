import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Post } from 'src/services/post';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  dadosLogin: any;
  nivel: string;
  cpfLogin: string;
  imgURL;
  id: string;

  eleicoes: any = [];
  representantes: any = [];
  limit: number = 15;
  start: number = 0;
  dados: any = [];
  tipo: string;



  usuario: string;
  nome: string;
  titulo: string;
  nomeVotacao: string;
  descricao: string;
  voto: string;


  idUsuario: string;
  nomeUsuario: string;
  status: string;


  totalVotacao: string;
  totalEleicao: string;
  totalEventos: string;
  totalAberta: string;
  totalFechada: string;
  totalCriadas: string;
  criadasEventos: string;
  criadasEleicao: string;


  constructor(private router: Router, private provider: Post, private storage: NativeStorage) {

  }


  ngOnInit() {
    this.carregar()
  }

  ionViewWillEnter() {


    this.storage.getItem('session_storage').then((res) => {
      this.dadosLogin = res;
      this.cpfLogin = this.dadosLogin.cpf;
      this.nivel = this.dadosLogin.nivel;
      this.id = this.dadosLogin.id;

    });
    this.dados = [];
    this.start = 0;
    this.carregar();
    if (this.tipo == 'eventos') {
      this.carregarRepresentante();
    } else if (this.tipo == 'pessoas') {
      this.carregarEleicao();
    }

  }

  conta() {
    this.router.navigate(['/tabs/conta'])
  }

  criadorVotacao() {
    this.router.navigate(['/tabs/criador-votacao'])
  }


  carregarRepresentante() {
    return new Promise(resolve => {
      this.representantes = [];
      let dados = {
        requisicao: 'listar_ultima_eventos',

        nomeUsuario: this.nomeUsuario,
        voto: this.voto,
        cpf: this.cpfLogin,
        titulo: this.titulo,
        limit: this.limit,
        start: this.start
      };
      this.provider.dadosApi(dados, 'apiRelatorio.php').subscribe(data => {
        if (data['result'] == '0') {

          this.ionViewWillEnter();

        } else {

          for (let representante of data['result']) {
            this.representantes.push(representante);


          }
        }

        resolve(true);
      });
    });
  }

  carregarEleicao() {
    return new Promise(resolve => {
      this.eleicoes = [];
      let dados = {
        requisicao: 'listar_ultima_eleicao',
        nomeUsuario: this.nomeUsuario,
        voto: this.voto,
        cpf: this.cpfLogin,
        status: this.status,
        limit: this.limit,
        start: this.start
      };
      this.provider.dadosApi(dados, 'apiRelatorio.php').subscribe(data => {
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


  carregar() {
    return new Promise(resolve => {

      let dados = {
        requisicao: 'listar_dados',
        id: this.id,
        cpf: this.cpfLogin,

      };

      this.provider.dadosApi(dados, 'apiRelatorio.php').subscribe(data => {

        if (data['success']) {
          this.totalVotacao = data['result']['totalVotacao'];
          this.totalEleicao = data['result']['totalEleicao'];
          this.totalEventos = data['result']['totalEventos'];
          this.totalAberta = data['result']['totalAberta'];
          this.totalFechada = data['result']['totalFechada'];
          this.totalCriadas = data['result']['totalCriadas'];
          this.criadasEventos = data['result']['criadasEventos'];
          this.criadasEleicao = data['result']['criadasEleicao'];
          this.nomeVotacao = data['result']['nomeVotacao'];
          this.descricao = data['result']['descricao'];
          this.tipo = data['result']['tipo'];

        }

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





