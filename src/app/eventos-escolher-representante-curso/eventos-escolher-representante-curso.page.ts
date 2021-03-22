import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-eventos-escolher-representante-curso',
  templateUrl: './eventos-escolher-representante-curso.page.html',
  styleUrls: ['./eventos-escolher-representante-curso.page.scss'],
})
export class EventosEscolherRepresentanteCursoPage implements OnInit {

  cursos = [];
  votacoes = [];
  participantes: any = [];
  limit: number = 15;
  start: number = 0;
  idCurso: string = "";
  nomeCurso: string = "";
  nomeTurma: string ="";
  idTurma: string = "";
  status : boolean ;
  titulo: string = "";
  idVotacao: string = "";
  
  constructor(private actRouter: ActivatedRoute, private router: Router, private provider: Post, public toastController: ToastController) { }


  ionViewWillEnter() {

    this.cursos = [];
    this.start = 0;
    this.carregarCursos();

  }
  ngOnInit() {
  }
  voltar(){
    this.router.navigate(['/eventos-representante'])
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
 
  _getSelectItem(select) {
    console.log(select.isChecked)
    this.idCurso = select.id;
    console.log(select.id)

    this.cursos.forEach(item => {
      if (select.id == this.idCurso) {
        item.isChecked = false;
      }
      if (item.nome == select.nome) {
        item.isChecked = select.isChecked;
      }
    })
  }
  cadastrar() {
    return new Promise(resolve => {
      let dados = {
        requisicao: 'eventos-cursos',
        titulo: this.titulo,
        curso: this.idCurso,


      };
      this.provider.dadosApi(dados, 'apiVot.php').subscribe(data => {
        this.router.navigate(['/eventos-escolher-representante-turma']);
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
      this.carregarCursos().then(() => {
        event.target.complete();
      });
  
    }, 500);
  }


}