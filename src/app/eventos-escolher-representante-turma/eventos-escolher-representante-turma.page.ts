import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-eventos-escolher-representante-turma',
  templateUrl: './eventos-escolher-representante-turma.page.html',
  styleUrls: ['./eventos-escolher-representante-turma.page.scss'],
})
export class EventosEscolherRepresentanteTurmaPage implements OnInit {
  turmas = [];
  idTurma: string;
  curso: string = "";
  isChecked = false;
  nomeTurma: string = "";
  limit: number = 15;
  start: number = 0;
  public paticipante: any;

  constructor(private actRouter: ActivatedRoute, private router: Router, private provider: Post, public toastController: ToastController) { }

  ngOnInit() {
  }

  _getSelectItem(select) {
    console.log(select.isChecked)
    this.idTurma = select.id;
    console.log(select.id)

    this.turmas.forEach(item => {
      if (select.id == this.idTurma) {
        item.isChecked = false;
      }
      if (item.nome == select.nome) {
        item.isChecked = select.isChecked;
      }
    })
  }

  ionViewWillEnter() {



    this.turmas = [];
    this.start = 0;

    this.carregarTurmas();
  }
  voltar(){
    this.router.navigate(['/eventos-escolher-representante-curso'])
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
  cadastrar() {
    return new Promise(resolve => {
      let dados = {
        requisicao: 'escolher-turmas',
        turma: this.idTurma

      };
      this.provider.dadosApi(dados, 'apiVot.php').subscribe(data => {
        this.router.navigate(['/eventos-escolher-representante']);
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
      this.carregarTurmas().then(() => {
        event.target.complete();
      });
  
    }, 500);
  }

}
