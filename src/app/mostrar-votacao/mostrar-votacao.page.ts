import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../services/post';
import { AlertController, ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';


@Component({
  selector: 'app-mostrar-votacao',
  templateUrl: './mostrar-votacao.page.html',
  styleUrls: ['./mostrar-votacao.page.scss'],
})
export class MostrarVotacaoPage implements OnInit {
  candidatos = [];
  representantes = [];
  id: string = "";
  nome: string = "";
  descricao: string = "";
  tipo: string = "";
  inicio: string = "";
  terminio: number = 0;
  status: string = "Aberta";
  curso: number = 0;
  turma: number = 0;
  nomeCurso: string = "";
  nomeTurma: string = "";
  idCandidato: string = "";
  idVotacao: string = "";
  idUsuario: string = "";
  nomeUsuario: string = "";
  limit: number = 15;
  start: number = 0;
  votando: number;
  idEleicao: string;
  titulo: string = "";

  cpfLogin: string;
  dadosLogin: any;

  constructor(
    private storage: NativeStorage, private actRouter: ActivatedRoute, private router: Router, private provider: Post, public toastController: ToastController, public alertController: AlertController
  ) {

  }

  ionViewWillEnter() {
    this.storage.getItem('session_storage').then((res) => {
      this.dadosLogin = res;
      this.cpfLogin = this.dadosLogin.cpf;

    });



    this.candidatos = [];
    this.representantes = [];
    this.start = 0;
    if (this.tipo == 'pessoas') {
      this.carregar();
    }
    if (this.tipo == 'eventos') {
      this.carregarEventos();
    }

  }
  voltar() {
    this.router.navigate(['/tabs/votacao'])
  }

  cadastrar() {
    console.log(this.id)
    return new Promise(resolve => {
      let dados = {
        requisicao: 'add-vot',
        id: this.id,
      };
      this.provider.dadosApi(dados, 'apiVot.php').subscribe(data => {

      });
    });
  }

  async votar() {
    if (this.idCandidato == "") {
      const toast = await this.toastController.create({
        message: 'Aviso! voce tem que escolher um candidato!',
        duration: 2000,
        color: 'warning'
      });
      toast.present();

      return;
    } else {
      // this.votando = 1;
      console.log(this.cpfLogin)
      return new Promise(resolve => {
        let dados = {
          requisicao: 'votando',
          id: this.idCandidato,
          cpf: this.cpfLogin

        };
        this.provider.dadosApi(dados, 'apiVot.php').subscribe(data => {
          this.mensagemSalvar();
          // this.router.navigate(['/votacao'])
          this.router.navigate(['/tabs/votacao'])

        });
      });
    }
  }

  async votarEventos() {
    if (this.idCandidato == "") {
      const toast = await this.toastController.create({
        message: 'Aviso! voce tem que escolher um candidato!',
        duration: 2000,
        color: 'warning'
      });
      toast.present();

      return;
    } else {
      // this.votando = 1;
      console.log(this.cpfLogin)
      return new Promise(resolve => {
        let dados = {
          requisicao: 'votando_eventos',
          id: this.idCandidato,
          cpf: this.cpfLogin,
          idVot: this.id

        };
        this.provider.dadosApi(dados, 'apiVot.php').subscribe(data => {
          this.mensagemSalvar();
          // this.router.navigate(['/votacao'])
          this.router.navigate(['/tabs/votacao'])

        });
      });
    }
  }


  ngOnInit() {
    //recupera para editar
    this.actRouter.params.subscribe((data: any) => {
      this.id = data.id;
      this.nome = data.nome;
      this.descricao = data.descricao;
      this.tipo = data.tipo;
      this.inicio = data.inicio;
      this.terminio = data.terminio
      this.curso = data.curso;
      this.turma = data.turma;

    });
    this.cadastrar();

  }

  _getSelectItem(select) {
    console.log(select.isChecked)
    this.idCandidato = select.id;
    console.log(select.votacao)
    console.log(select.id)
    this.idVotacao = select.votacao;
    this.candidatos.forEach(item => {
      if (select.id == this.idCandidato) {
        item.isChecked = false;

      }
      if (item.nome == select.nome) {
        item.isChecked = select.isChecked;
      }
    })
  }
  carregar() {

    return new Promise(resolve => {
      // this.candidatos = [];
      // this.candidatos.forEach(item => {
      //   if (item.votacao == this.id) {
      let dados = {
        requisicao: 'listar_eleicao_vot',
        id: this.idEleicao,
        votacao: this.idVotacao,
     
        usuario: this.idUsuario,
        nome: this.nomeUsuario,
        limit: this.limit,
        start: this.start,
        status: this.status
      };

      this.provider.dadosApi(dados, 'apiVot.php').subscribe(data => {

        if (data['result'] == '0') {
          this.ionViewWillEnter();
        } else {
          for (let candidato of data['result']) {
            this.candidatos.push(candidato);
          }
        }

        resolve(true);

      });
      //   }
      // })
    });

  }

  carregarEventos() {

    return new Promise(resolve => {

      let dados = {
        requisicao: 'listar_eventos_vot',
        id: this.idEleicao,
        votacao: this.idVotacao,
        usuario: this.idUsuario,
        nome: this.nomeUsuario,
        titulo: this.titulo,
        limit: this.limit,
        start: this.start,
        status: this.status

      };

      this.provider.dadosApi(dados, 'apiVot.php').subscribe(data => {

        if (data['result'] == '0') {
          this.ionViewWillEnter();
        } else {
          console.log('id', this.id)
          for (let representante of data['result']) {
            this.representantes.push(representante);
          }
        }

        resolve(true);

      });
      //   }
      // })
    });

  }

  async mensagemSalvar() {
    const toast = await this.toastController.create({
      message: "Voto realizado com sucesso!",
      duration: 1000
    });
    toast.present();
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

      this.carregarEventos().then(() => {
        event.target.complete();
      });

    }, 500);
  }
}


