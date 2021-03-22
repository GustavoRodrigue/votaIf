import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-eventos-escolher-representante',
  templateUrl: './eventos-escolher-representante.page.html',
  styleUrls: ['./eventos-escolher-representante.page.scss'],
})
export class EventosEscolherRepresentantePage implements OnInit {

  usuarios = [];
  limit: number = 15;
  start: number = 0;
  id: string = "";
  nome: string = "";
  ischecked:any ;
  constructor(private actRouter: ActivatedRoute, private router: Router, private provider: Post, public toastController: ToastController) { }


  ionViewWillEnter() {

    this.usuarios = [];
    this.start = 0;
    this.carregar();

  }
  ngOnInit() {
  }
  voltar(){
    this.router.navigate(['/eventos-representante'])
   }
 
  carregar() {
    return new Promise(resolve => {
      this.usuarios = [];
      let dados = {
        requisicao: 'escolher-representante',
        id: this.id,
        nome: this.nome,
        limit: this.limit,
        start: this.start
      };
      this.provider.dadosApi(dados, 'apiVot.php').subscribe(data => {
        if (data['result'] == '0') {

          this.ionViewWillEnter();

        } else {
          for (let usuario of data['result']) {
            this.usuarios.push(usuario);

          }
        }

        resolve(true);
      });
    });
  }
 
  _getSelectItem(select) {
    console.log(select.isChecked)
    this.id = select.id;
    console.log(select.id)

    this.usuarios.forEach(item => {
      if (select.id == this.id) {
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
        requisicao: 'eventos-representante',
        id: this.id

      };
      this.provider.dadosApi(dados, 'apiVot.php').subscribe(data => {
        this.router.navigate(['/eventos-representante']);
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
      this.carregar().then(() => {
        event.target.complete();
      });
  
    }, 500);
  }


}
