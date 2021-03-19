import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../services/post';
import { ToastController } from '@ionic/angular';
import { Time } from '@angular/common';


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
  constructor(private actRouter: ActivatedRoute, private router: Router, private provider: Post, public toastController: ToastController) { }

  async mensagemSalvar() {
    const toast = await this.toastController.create({
      message: 'Salvo com Sucesso!',
      duration: 1000
    });
    toast.present();
  }
  ionViewWillEnter() {

    this.cursos = [];
    this.turmas = [];
    this.start = 0;
   
  }

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
        };
        this.provider.dadosApi(dados, 'apiVot.php').subscribe(data => {

          if(this.tipo == 'pessoas'){
            this.router.navigate(['/eleicao']);
           } else if(this.tipo == 'eventos'){
             console.log("eventos");
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

}