import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/services/post';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-alunos',
  templateUrl: './add-alunos.page.html',
  styleUrls: ['./add-alunos.page.scss'],
})
export class AddAlunosPage implements OnInit {

  cursos = [];
  turmas = [];
  id: string = "";
  nome: string = "";
  email: string = "";
  senha: string = "";
  curso: number = 0;
  turma: number = 0;
  cpf: string = "";
  telefone: string = "";
  nomeCurso: string = "";
  nomeTurma: string = "";
  status: string = "aguardando";
  nivel: string = "";

  limit: number = 15;
  start: number = 0;

  constructor(private actRouter: ActivatedRoute, private router: Router, private provider: Post, public toastController: ToastController) { }

  async mensagemSalvar(texto) {
    const toast = await this.toastController.create({
      message: texto,
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
      this.email = data.email;
      this.cpf = data.cpf;
      this.telefone = data.telefone;
      this.senha = data.senha;
      this.curso = data.curso;
      this.turma = data.turma;
      this.nivel = data.nivel;
    });

  }
  telaInicial() {
    this.router.navigate(['/tela-inicial'])
   

  }
  async cadastrar() {
    if (!this.nome || !this.email || !this.cpf || !this.telefone || !this.senha || !this.curso || !this.turma ) {

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
          requisicao: 'add',
          nome: this.nome,
          email: this.email,
          senha: this.senha,
          curso: this.curso,
          turma: this.turma,
          nivel: 'aluno',
          cpf: this.cpf,
          telefone: this.telefone,
          status: this.status
        };

        this.provider.dadosApi(dados, 'api.php').subscribe(data => {

          this.mensagemSalvar(data['result']);
          if (data['result'] == 'Salvo com Sucesso!') {
            this.router.navigate(['/login']);

          }

        });
      });
    }
  }
  editar() {
    return new Promise(resolve => {
      let dados = {
        requisicao: 'editar',
        id: this.id,
        nome: this.nome,
        cpf: this.cpf,
        telefone: this.telefone,
        email: this.email,
        senha: this.senha,
        curso: this.curso,
        turma: this.turma,
        nivel: this.nivel,
        status: this.status
      };
      this.provider.dadosApi(dados, 'api.php').subscribe(data => {
        this.router.navigate(['/usuarios']);
        this.router.navigate(['tabs/usuarios']);

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
