import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-eventos-titulo',
  templateUrl: './eventos-titulo.page.html',
  styleUrls: ['./eventos-titulo.page.scss'],
})
export class EventosTituloPage implements OnInit {

  representantes: any = [];
  limit: number = 15;
  start: number = 0;
  titulo: string = "";
  id: string = "";
  

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
    
  }
  cadastrar() {
    return new Promise(resolve => {
      let dados = {
        requisicao: 'eventos-titulo',
        titulo: this.titulo

      };
      this.provider.dadosApi(dados, 'apiVot.php').subscribe(data => {
        this.router.navigate(['/eventos-representante']);
      });
    });

  }

  
  AddRepresentante() {
    this.router.navigate(['/eventos-escolher-representante-curso']);
  }
 
}

