import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-eventos-representante',
  templateUrl: './eventos-representante.page.html',
  styleUrls: ['./eventos-representante.page.scss'],
})
export class EventosRepresentantePage implements OnInit {

  representantes: any = [];
  limit: number = 15;
  start: number = 0;
  nome: string = "";
  curso: string = "";
  id: string = "";
  usuario:string="";
  votacao: string = "";
  nomeC: string = "";
  titulo: string = "";

  teste: number = 0;

  constructor(private router: Router, private provider: Post, public toastController: ToastController, public alertController: AlertController) {

  }
  ngOnInit() {
    
  }
  voltar(){
    this.router.navigate(['/votacao'])
   }

  ionViewWillEnter() {
    this.representantes = [];
  
    this.start = 0;
    if(this.teste = 1){
      this.carregar();
    }
      
    
    
  }


  avancar(){
    this.router.navigate(['/participante']);
  }
  AddRepresentante() {
    this.router.navigate(['/eventos-escolher-representante-curso']);
  }
  carregar() {
    return new Promise(resolve => {
      this.representantes = [];
      let dados = {
        requisicao: 'buscar-representante',
        id: this.id,
        usuario: this.usuario,
        nome: this.nome,
        curso: this.curso,
        nomeC: this.nomeC,
        titulo: this.titulo,
        limit: this.limit,
        start: this.start
      };
      this.provider.dadosApi(dados, 'apiVot.php').subscribe(data => {
        if (data['result'] == '0') {
          this.teste = 0;
          this.ionViewWillEnter();

        } else {
          this.teste = 1;
          for (let representante of data['result']) {
            this.representantes.push(representante);


          }
        }

        resolve(true);
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
  
  


}
