import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../services/post';
import { ToastController } from '@ionic/angular';

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
  inicio: string = "";
  terminio: number = 0;
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
    this.carregarCursos();
    this.carregarTurmas();
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

  }
  votacao() {
    this.router.navigate(['tabs/votacao'])
  }
  cadastrar() {
    return new Promise(resolve => {
      let dados = {
        requisicao: 'add-votacao',
        nome: this.nome,
        descricao: this.descricao,
        tipo: this.tipo,
        inicio: this.inicio,
        terminio: this.terminio,
        status: this.status,
        curso: this.curso,
        turma: this.turma
      };
      this.provider.dadosApi(dados, 'apiAdm.php').subscribe(data => {

        this.router.navigate(['/usuarios']);
        this.router.navigate(['tabs/votacao']);
        this.mensagemSalvar();
      });
    });
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
        terminio: this.terminio,
        status: this.status,
        curso: this.curso,
        turma: this.turma
      };
      this.provider.dadosApi(dados, 'apiAdm.php').subscribe(data => {
        this.router.navigate(['/usuarios']);
        this.router.navigate(['tabs/votacao']);
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