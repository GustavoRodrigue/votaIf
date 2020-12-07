import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/services/post';
import { ToastController } from '@ionic/angular';
import { CursoPageModule } from '../curso/curso.module';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-add-turmas',
  templateUrl: './add-turmas.page.html',
  styleUrls: ['./add-turmas.page.scss'],
})
export class AddTurmasPage implements OnInit {
  cursos: any = [];
  id: string = "";
  idCurso: number = 0;
  nome: string = "";
  nomeCurso: string = "";
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

  ngOnInit() {
    //recupera para editar
    this.actRouter.params.subscribe((data: any) => {

      this.id = data.id;
      this.nome = data.nome;
      this.idCurso = data.curso;
      
     
    });


  }

  ionViewWillEnter() {

    this.cursos = [];
    this.start = 0;
    this.carregarCursos();
  }

  turmas() {
    this.router.navigate(['tabs/turmas'])
  }
  carregarCursos() {
    return new Promise(resolve => {
      this.cursos = [];
      let dados = {
        requisicao: 'listar_cursos',
        id: this.idCurso,
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
  async cadastrar() {

    if (!this.nome || !this.idCurso) {

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
          requisicao: 'add-turmas',
          nome: this.nome,
          curso: this.idCurso,

        };

        this.provider.dadosApi(dados, 'apiAdm.php').subscribe(data => {

          console.log(dados);
          this.router.navigate(['tabs/turmas']);
          this.mensagemSalvar();
        });
      });
    }
  }
  async editar() {
    if (!this.nome || !this.idCurso) {

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
          requisicao: 'editar_turmas',
          id: this.id,
          nome: this.nome,
          curso: this.idCurso

        };
        this.provider.dadosApi(dados, 'apiAdm.php').subscribe(data => {

          this.router.navigate(['tabs/turmas']);
          this.mensagemSalvar();
        });
      });
    }
  }



}

