import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-servidor',
  templateUrl: './servidor.page.html',
  styleUrls: ['./servidor.page.scss'],
})
export class ServidorPage implements OnInit {

  
  servidores: any = [];
  limit: number = 15;
  start: number = 0;
  nome: string = "";
  email: string ="";
  senha: string ="";
  nivel: string ="";
  status : boolean ;
  selecionado: string;

  constructor(private router: Router, private provider: Post, public toastController: ToastController, public alertController: AlertController) {
    
   }
  ngOnInit() {
    this.carregar();
  }
  
  ionViewWillEnter() {
    
    this.servidores = [];
    this.start = 0;
    this.carregar();
  }

  mais(){
    this.router.navigate(['/tabs/mais'])
  }
  segmentChanged(event) {
      
    this.selecionado = event.target.value;
   if(this.selecionado == "aguardando"){
     this.status = false;
     this.carregar();
   } else if(this.selecionado == "aprovado"){
     this.status = true;
     this.carregar();
   
   }
   
 }



  carregar() {
    return new Promise(resolve => {
      this.servidores = [];
      let dados = {
        requisicao: 'listar_servidor',
        nome: this.nome,
        email: this.email,
        senha: this.senha,
        nivel: this.nivel,
        status: this.status,
        limit: this.limit,
        start: this.start
      };
      this.provider.dadosApi(dados, 'apiAdm.php').subscribe(data => {
        if (data['result'] == '0') {
          
          this.ionViewWillEnter();
        
        } else {
          for (let servidor of data['result']) {
            this.servidores.push(servidor);
            
    
          }
        }

        resolve(true);
        
      });
    });
  }
  // editar(id, nome, email, senha, curso, turma, status, nivel) {
  //   this.router.navigate(['add-usuarios/' + id + '/' + nome + '/' + email + '/' + senha + '/' + curso + '/' + turma + '/' + status + '/' + nivel]);
  // }

  mostrar(id, nome, email, nivel, cpf, telefone, status) {
    this.router.navigate(['mostrar-servidor/' + id + '/' + nome + '/' + email + '/' + nivel + '/' + cpf + '/' + telefone + '/' + status]);
  }
  aprovar(id){
    return new Promise(resolve => {
      
      let dados = {
        requisicao : 'aprovar_servidor',
        id : id, 
        
        };

        this.provider.dadosApi(dados, 'apiAdm.php').subscribe(data => {
         this.ionViewWillEnter();
        });
    });
  }

  excluir(id) {
    return new Promise(resolve => {
      let dados = {
        requisicao: 'excluir_servidor',
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

