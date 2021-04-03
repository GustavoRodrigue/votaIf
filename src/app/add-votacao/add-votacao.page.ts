import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../services/post';
import { ToastController } from '@ionic/angular';
import { Time } from '@angular/common';
import { NativeStorage } from '@ionic-native/native-storage/ngx';


@Component({
  selector: 'app-add-votacao',
  templateUrl: './add-votacao.page.html',
  styleUrls: ['./add-votacao.page.scss'],
})
export class AddVotacaoPage implements OnInit {

  cursos = [];
  turmas = [];
  id: string = "";
  nome: string = "";
  descricao: string = "";
  tipo: string = "";
  inicio: Date;
  hora_inicio: Time;
  terminio: Date;
  hora_terminio: Time;
  status: string = "Aberta";
  curso: number = 0;
  turma: number = 0;
  nomeCurso: string = "";
  nomeTurma: string = "";
  limit: number = 15;
  start: number = 0;
  dadosLogin: any;
  idUsuario : string;


  constructor(private storage: NativeStorage ,private actRouter: ActivatedRoute, private router: Router, private provider: Post, public toastController: ToastController) { }

 
  ionViewWillEnter() {

    this.storage.getItem('session_storage').then((res) => {
      this.dadosLogin = res;
      this.idUsuario = this.dadosLogin.id;
      

    });

    this.cursos = [];
    this.turmas = [];
    this.start = 0;
  //  this.data()

  }
  // data() {

  //   var dataAtual = new Date();
  //   var dia = dataAtual.getDate();
  //   var mes = (dataAtual.getMonth() + 1);
  //   var ano = dataAtual.getFullYear();
  //   var horas = dataAtual.getHours();
  //   var minutos = dataAtual.getMinutes();
  //   var agora = (ano+'-0'+mes+'-'+dia);
    

  // //  var  dataInicio = this.inicio;
    
  // //   if(dataInicio.toString() <  agora.toString()){
  // //     this.mensagemDataAtual();
  // //   }
  
  // }

  ngOnInit() {
    //recupera para editar
    this.actRouter.params.subscribe((data: any) => {
      this.id = data.id;
      this.nome = data.nome;
      this.descricao = data.descricao;
      this.inicio = data.inicio;
      this.hora_inicio = data.hora_inicio;
      this.terminio = data.terminio;
      this.hora_terminio = data.hora_terminio;
      this.tipo = data.tipo;
    });

  }
  votacao() {
    this.router.navigate(['tabs/votacao'])
  }
  async cadastrar() {
    

    if (!this.nome || !this.tipo || !this.inicio || !this.hora_inicio
      || !this.hora_terminio) {

      const toast = await this.toastController.create({
        message: 'Aviso! Preencha todos os campos!',
        duration: 2000,
        color: 'warning'
      });
      toast.present();

      return;
    } else {

      var dataAtual = new Date();
    var dia = dataAtual.getDate();
    var mes = (dataAtual.getMonth() + 1);
    var ano = dataAtual.getFullYear();
    var horas = dataAtual.getHours();
    var agora = (ano+'-0'+mes+'-'+dia);
    

   var  dataInicio = this.inicio;
   var dataTerminio = this.terminio;
   var horaInicio = this.hora_inicio;
   var horaTerminio = this.hora_terminio;
    
    if(dataInicio.toString() <  agora.toString()){
      this.mensagemDataAtual();
    } else if(dataTerminio.toString() < agora.toString() || dataTerminio.toString() < dataInicio.toString() ){
      const toast = await this.toastController.create({
        message: 'Data final menor que data atual e data inicio!',
        color: 'warning',
        duration: 1000
      });
      toast.present();
    }else{

      return new Promise(resolve => {
        let dados = {
          requisicao: 'add-votacao',
          nome: this.nome,
          descricao: this.descricao,
          tipo: this.tipo,
          inicio: this.inicio,
          hora_inicio: this.hora_inicio,
          terminio: this.terminio,
          hora_terminio: this.hora_terminio,
          status: this.status,
          idUsuario: this.idUsuario
        };
        this.provider.dadosApi(dados, 'apiVot.php').subscribe(data => {

          if (this.tipo == 'pessoas') {
            this.router.navigate(['/eleicao']);
          } else if (this.tipo == 'eventos') {
            this.router.navigate(['/eventos-responsavel-votacao']);
          }
          // if(this.tipo == 'eventos'){
          //   this.router.navigate(['tabs/votacao']);
          // }
          // if(this.tipo == 'trabalhos'){
          //   this.router.navigate(['tabs/votacao']);
          // }


        });
      });
    }
    }
  }
  editar() {
    return new Promise(resolve => {
      let dados = {
        requisicao: 'editar-votacao',
        id: this.id,
        nome: this.nome,
        descricao: this.descricao,
        tipo: this.tipo,
        inicio: this.inicio,
        hora_inicio: this.hora_inicio,
        terminio: this.terminio,
        hora_terminio: this.hora_terminio,
        status: this.status

      };
      this.provider.dadosApi(dados, 'apiAdm.php').subscribe(data => {
        // this.router.navigate(['tabs/votacao']);
        this.mensagemSalvar();
      });
    });
  }
  carregarCursos() {
    return new Promise(resolve => {
      this.cursos = [];
      let dados = {
        requisicao: 'listar_cursos',

        nome: this.nomeCurso,
        limit: this.limit,
        start: this.start
      };
      this.provider.dadosApi(dados, 'apiAdm.php').subscribe(data => {
        if (data['result'] == '0') {

          this.ionViewWillEnter();

        } else {
          for (let curso of data['result']) {
            this.cursos.push(curso);

          }
        }

        resolve(true);
      });
    });
  }
  carregarTurmas() {
    return new Promise(resolve => {
      this.turmas = [];
      let dados = {
        requisicao: 'listar_turmas',
        nome: this.nomeTurma,
        limit: this.limit,
        start: this.start
      };
      this.provider.dadosApi(dados, 'apiAdm.php').subscribe(data => {
        if (data['result'] == '0') {

          this.ionViewWillEnter();

        } else {
          for (let turma of data['result']) {
            this.turmas.push(turma);

          }
        }

        resolve(true);

      });
    });
  }
  async mensagemSalvar() {
    const toast = await this.toastController.create({
      message: 'Salvo com Sucesso!',
      duration: 1000
    });
    toast.present();
  }
  async mensagemDataAtual() {
    const toast = await this.toastController.create({
      message: 'Data menor que data atual!',
      color: 'warning',
      duration: 1000
    });
    toast.present();
  }
  async mensagemtime() {
    const toast = await this.toastController.create({
      message: 'Salvo com Sucesso!',
      color: 'warning',
      duration: 1000
    });
    toast.present();
  }

}