import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-eventos-responsavel-votacao',
  templateUrl: './eventos-responsavel-votacao.page.html',
  styleUrls: ['./eventos-responsavel-votacao.page.scss'],
})
export class EventosResponsavelVotacaoPage implements OnInit {
  responsaveis: any = [];
  limit: number = 15;
  start: number = 0;
  nome: string = "";
  nivel: string = "";
  id: string = "";
  usuario:string="";
  votacao: string = "";
 
  prof: number = 0;
  serv: number = 0;

  teste: number = 0;

  constructor(private router: Router, private provider: Post, public toastController: ToastController, public alertController: AlertController) {

  }
  ngOnInit() {
    
  }
  voltar(){
    this.router.navigate(['/votacao'])
   }

  ionViewWillEnter() {
    this.responsaveis = [];
  
    this.start = 0;
    if(this.teste = 1){
      this.carregar();
    }
      
    
    
  }


  avancar(){
    this.router.navigate(['/eventos-representante']);
  }
  AddResponsavel() {
    this.router.navigate(['/eventos-escolher-prof-serv']);
  }
  carregar() {
    return new Promise(resolve => {
      this.responsaveis = [];
      let dados = {
        requisicao: 'buscar-responsavel',
        id: this.id,
        usuario: this.usuario,
        nome: this.nome,
        nivel: this.nivel,
        limit: this.limit,
        start: this.start
      };
      this.provider.dadosApi(dados, 'apiVot.php').subscribe(data => {
        if (data['result'] == '0') {
          this.teste = 0;
          this.ionViewWillEnter();

        } else {
          this.teste = 1;
          for (let responsavel of data['result']) {
            this.responsaveis.push(responsavel);


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
