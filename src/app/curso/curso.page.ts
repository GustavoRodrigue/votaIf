import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/services/post';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.page.html',
  styleUrls: ['./curso.page.scss'],
})
export class CursoPage implements OnInit {
//  turmas: any = [];
  cursos: any = [];
  limit: number = 15;
  start: number = 0;
  nome: string = "";
  id: String = "";

  constructor(private router: Router, private provider: Post, public toastController: ToastController, public alertController: AlertController) {

  }

  ngOnInit() {
   
  }
   ionViewWillEnter() {
    //this.turmas = [];
    this.cursos = [];
    this.start = 0;
    this.carregar();
  }

  addCursos() {
    this.router.navigate(['/add-cursos'])
  }

  carregar() {
    return new Promise(resolve => {
      this.cursos = [];
      let dados = {
        requisicao: 'listar_cursos',
        nome: this.nome,
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
  editar(id, nome) {
    this.router.navigate(['add-cursos/' + id + '/' + nome]);
  }

  excluir(id) {

    return new Promise(resolve => {
      let dados = {
        requisicao: 'excluir_cursos',
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
