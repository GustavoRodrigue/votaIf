import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-add-usuario-votacao',
  templateUrl: './add-usuario-votacao.page.html',
  styleUrls: ['./add-usuario-votacao.page.scss'],
})
export class AddUsuarioVotacaoPage implements OnInit {
  usuarios: any = [];
  limit: number = 15;
  start: number = 0;
  nome: string = "";
  email: string ="";
  senha: string ="";
  nivel: string ="";
  cpf: string = "";
  telefone: string = "";
  idCurso: string = "";
  nomeCurso: string = "";
  nomeTurma: string ="";
  idTurma: string = "";
  id: string = "";
  ischecked:any ;
  
  constructor(private router: Router, private provider: Post, public toastController: ToastController,
     public alertController: AlertController) {
   
  }
 ngOnInit() {
   this.carregar();
 }
 
 ionViewWillEnter() {
   
   this.usuarios = [];
   this.start = 0;
   this.carregar();
 }

 voltar(){
  this.router.navigate(['/eleicao'])
 }

 teste(event){
   this.ischecked = event.target.value;
 }
 _seleciona(select){
 console.log(this.ischecked)
  // this.usuarios.forEach(item => {
  //   if(item.id != select){
  //     this.checked = false;
  //   }
  // })
}

 carregar() {
   return new Promise(resolve => {
     this.usuarios = [];
     let dados = {
       requisicao: 'listar_usuario',
       nome: this.nome,
       email: this.email,
       senha: this.senha,
       idCurso: this.idCurso,
       idTurma: this.idTurma,
       nomeCurso: this.nomeCurso,
       nomeTruma: this.nomeTurma,
       nivel: this.nivel,
       cpf: this.cpf,
       telefone: this.telefone,
       limit: this.limit,
       start: this.start
     };
     this.provider.dadosApi(dados, 'apivot.php').subscribe(data => {
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
    if(select.id == this.id){
      item.isChecked = false;
    }
    if (item.nome == select.nome) {
      item.isChecked = select.isChecked;
    }
  })
}

 adicionar() {
 
    return new Promise(resolve => {
      let dados = {
        requisicao: 'add_candidato',
        usuario: this.id
      };

      this.provider.dadosApi(dados, 'apiVot.php').subscribe(data => {

        this.mensagemSalvar();
        this.router.navigate(['/eleicao'])
        

      });
    });
  
}

async mensagemSalvar() {
  const toast = await this.toastController.create({
    message: "adicionado com sucesso",
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
