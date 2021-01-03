import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/services/post';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.page.html',
  styleUrls: ['./turma.page.scss'],
})
export class TurmaPage implements OnInit {

  turmas: any = [];
  limit: number = 15;
  start: number = 0;
  nome: string = "";
  curso: string = "";
  idCurso: number = 0;

  constructor(private router: Router, private provider: Post, public toastController: ToastController, public alertController: AlertController) {
    
  }

  ngOnInit() {
    this.ionViewWillEnter();
  }
  ionViewWillEnter() {

    this.turmas = [];
    this.start = 0;
    this.carregar();
  }

  addTurmas() {
    this.router.navigate(['/add-turmas'])
  }
  mais(){
    this.router.navigate(['/tabs/mais'])
  }

  carregar() {
    return new Promise(resolve => {
      this.turmas = [];
      let dados = {
        requisicao: 'listar_turmas',
        nome: this.nome,
        curso: this.curso,
        idCurso: this.idCurso,
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
  editar(id, nome, curso) {
    this.router.navigate(['add-turmas/' + id + '/' + nome + '/' + curso]);
  }

  excluir(id) {
    return new Promise(resolve => {
      let dados = {
        requisicao: 'excluir_turmas',
        id: id
      };
      this.provider.dadosApi(dados, 'apiAdm.php').subscribe(data => {
        this.ionViewWillEnter();

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
  async presentAlertConfirm(id) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Aviso!!',
      message: 'Deseja excluir ?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.ionViewWillEnter();
          }
        }, {
          text: 'Sim',
          handler: () => {
            console.log('Confirm Okay');
            this.excluir(id);
          }
        }
      ]
    });

    await alert.present();
  }

}
