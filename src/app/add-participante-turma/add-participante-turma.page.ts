import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-add-participante-turma',
  templateUrl: './add-participante-turma.page.html',
  styleUrls: ['./add-participante-turma.page.scss'],
})
export class AddParticipanteTurmaPage implements OnInit {


  turmas = [];
  idTurma: string;
  isChecked = false;
  nomeTurma: string = "";
  limit: number = 15;
  start: number = 0;

  constructor(private actRouter: ActivatedRoute, private router: Router, private provider: Post, public toastController: ToastController) { }

  ngOnInit() {

  }
  _todas(){
    this.turmas.forEach(item => {
      if(item.isChecked){
        item.isChecked = false;
      }else{
        item.isChecked = true;
      }
    })
  }

  _getSelectItem(select) {
    console.log(select.isChecked)
    this.idTurma = select.id;
    console.log(select.id)

    this.turmas.forEach(item => {
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

  cadastrar(){
    console.log("tetste")
    this.turmas.forEach(item => {
      if (item.isChecked) {
        this.idTurma = item.id;


        console.log(this.idTurma)

        return new Promise(resolve => {
          let dados = {
            requisicao: 'add-votacao',

          };
          this.provider.dadosApi(dados, 'apiAdm.php').subscribe(data => {
            this.mensagemSalvar();
          });
        });
      }

    })
  }

  async mensagemSalvar() {
    const toast = await this.toastController.create({
      message: 'Salvo com Sucesso!',
      duration: 1000
    });
    toast.present();
  }
}
