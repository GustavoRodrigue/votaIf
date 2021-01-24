import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/services/post';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.page.html',
  styleUrls: ['./alunos.page.scss'],
})
export class AlunosPage implements OnInit {

  alunos: any = [];
  limit: number = 15;
  start: number = 0;
  nome: string = "";
  email: string ="";
  senha: string ="";
  nivel: string ="";
  idCurso: string = "";
  nomeCurso: string = "";
  nomeTurma: string ="";
  idTurma: string = "";
  status : boolean ;
  selecionado: string;

  constructor(private router: Router, private provider: Post, public toastController: ToastController, public alertController: AlertController) {
    
   }
  ngOnInit() {
    this.carregar();
  }
  
  ionViewWillEnter() {
    
    this.alunos = [];
    this.start = 0;
    this.carregar();
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
      this.alunos = [];
      let dados = {
        requisicao: 'listar',
        nome: this.nome,
        email: this.email,
        senha: this.senha,
        idCurso: this.idCurso,
        idTurma: this.idTurma,
        nomeCurso: this.nomeCurso,
        nomeTruma: this.nomeTurma,
        nivel: this.nivel,
        status: this.status,
        limit: this.limit,
        start: this.start
      };
      this.provider.dadosApi(dados, 'api.php').subscribe(data => {
        if (data['result'] == '0') {
          
          this.ionViewWillEnter();
        
        } else {
          for (let aluno of data['result']) {
            this.alunos.push(aluno);
            
    
          }
        }

        resolve(true);
      });
    });
  }
  editar(id, nome, email, senha, curso, turma, status, nivel) {
    this.router.navigate(['add-usuarios/' + id + '/' + nome + '/' + email + '/' + senha + '/' + curso + '/' + turma + '/' + status + '/' + nivel]);
  }

  mostrar(id, nome, email, senha, nivel) {
    this.router.navigate(['mostrar-usuarios/' + id + '/' + nome + '/' + email + '/' + senha + '/' + nivel]);
  }
  aprovar(id){
    return new Promise(resolve => {
      
      let dados = {
        requisicao : 'aprovar_usuarios',
        id : id, 
        
        };

        this.provider.dadosApi(dados, 'api.php').subscribe(data => {
         this.ionViewWillEnter();
        });
    });
  }

  excluir(id) {
    return new Promise(resolve => {
      let dados = {
        requisicao: 'excluir',
        id: id
      };
      this.provider.dadosApi(dados, 'api.php').subscribe(data => {
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
