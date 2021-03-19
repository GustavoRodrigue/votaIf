import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../services/post';
import { ToastController, AlertController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-votacao',
  templateUrl: './votacao.page.html',
  styleUrls: ['./votacao.page.scss'],
})
export class VotacaoPage implements OnInit {

  curso: string;
  turmas: string;
  nome: string;
  votacoes : any = [];
  limit : number = 15;
  start : number = 0;
  status: boolean;
  statusVotacao: number =0;
  

  // aberta: boolean = true;
  // encerrada: boolean = false;
  // todas: boolean = false;
  
  selecionado: string;

  votantes: any =[];
  idVotante:string;
  cpf: string;
  nomeV: string;
  vot: string;
  cpfLogin : string;
  dadosLogin : any;
  nivel: string;

  constructor(private storage: NativeStorage, private router: Router,  private provider: Post, public toastController: ToastController, public alertController: AlertController) { }

  ngOnInit() {
  
  }
  criarVotacao(){
    this.router.navigate(['/add-votacao']);
  }

  ionViewWillEnter(){
    this.carregar();
    this.storage.getItem('session_storage').then((res)=>{
      this.dadosLogin = res;
      this.cpfLogin = this.dadosLogin.cpf;
      this.nivel = this.dadosLogin.nivel;
     
    }); 
    this.votacoes = [];   
    this.votacoes = [];
    this.start = 0;
   
    // this.carregarVotantes();
  }

  
    segmentChanged(event) {
      
       this.selecionado = event.target.value;
      if(this.selecionado == "aberta"){
        this.status = false;
        this.carregar();
      } else if(this.selecionado == "encerrada"){
        this.status = true;
        this.carregar();
      
      }
    }

    // carregarVotantes() {
    //   return new Promise(resolve => {
    //     this.votantes = [];
    //     let dados = {
    //       requisicao: 'lista-votantes-votacao',
    //       idVotante: this.idVotante,
    //       cpf: this.cpf,
    //       nome: this.nomeV,
    //       votacao: this.vot,
    //       limit: this.limit,
    //       start: this.start,
         
    //     };
    //     this.provider.dadosApi(dados, 'apiVot.php').subscribe(data => {
    //       if (data['result'] == '0') {
            
    //         this.ionViewWillEnter();
          
    //       } else {
    //         for (let votante of data['result']) {
    //           this.votantes.push(votante);
              
      
    //         }
    //       }
  
    //       resolve(true);
    //     });
    //   });
    // }

  carregar(){
    return new Promise(resolve => {
      this.votacoes = [];
      let dados = {
        requisicao : 'listar_votacao',
        curso : this.curso, 
        turma: this.turmas,
        cpf: this.cpfLogin,
        limit : this.limit,
        start : this.start,
        status: this.status
        };

        this.provider.dadosApi(dados, 'apiVot.php').subscribe(data => {

        if(data['result'] == '0') {
          this.ionViewWillEnter();
        }else{
          for(let votacao of data['result']){
            this.votacoes.push(votacao);
            
            
          }
        }
         
         resolve(true);
         
        });
    });
    
  }
  motrar(id, nome, descricao, tipo, inicio, terminio, status, curso, turma){
    this.router.navigate(['/mostrar-votacao/'+id+'/'+ nome+ '/'+ descricao +'/'+ tipo +'/'+ inicio +'/'+ terminio +'/'+ status +'/'+ curso +'/'+ turma]);
  }
  excluir(id){
    return new Promise(resolve => {
      
      let dados = {
        requisicao : 'excluir_votacao',
        id : id, 
        };

        this.provider.dadosApi(dados, 'apiVot.php').subscribe(data => {
         this.ionViewWillEnter();
        });
    });
  }
  encerrar(id){
    return new Promise(resolve => {
      
      let dados = {
        requisicao : 'encerrar_votacao',
        id : id, 
        
        };

        this.provider.dadosApi(dados, 'apiVot.php').subscribe(data => {
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
    this.carregar().then(()=>{ 
      event.target.complete();
     });
   
  }, 500);
  

}
async encerrarVotacao(id) {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Aviso!!',
    message: 'Deseja Encerrar a votacao ?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancelar',
        cssClass: 'secondary',
        handler: (blah) => {
          this.ionViewWillEnter();
        }
      }, {
        text: 'Sim',
        handler: () => {
          console.log('Confirm Okay');
          this.encerrar(id);
        }
      }
    ]
  });

  await alert.present();
}

  
}