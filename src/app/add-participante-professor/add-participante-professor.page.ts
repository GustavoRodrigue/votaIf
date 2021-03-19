import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-add-participante-professor',
  templateUrl: './add-participante-professor.page.html',
  styleUrls: ['./add-participante-professor.page.scss'],
})
export class AddParticipanteProfessorPage implements OnInit {

  usuarios = [];
  idUsuario: string;
  isChecked = false;
  nome: string = "";
  email: string ="";
  senha: string ="";
  nivel: string ="";
  cpf: string = "";
  telefone: string = "";
  idCurso: string = "";
  id: string = "";
  ischecked:any ;
  limit: number = 15;
  start: number = 0;
  public paticipante: any;


  constructor(private actRouter: ActivatedRoute, private router: Router, private provider: Post, public toastController: ToastController) { }

  ngOnInit() {
   
  }
  _todas(){
    this.usuarios.forEach(item => {
      if(item.isChecked){
        item.isChecked = false;
      }else{
        item.isChecked = true;
      }
    })
  }

  _getSelectItem(select) {
    console.log(select.isChecked)
    this.idUsuario = select.id;
    console.log(select.id)

    this.usuarios.forEach(item => {
      if (item.nome == select.nome) {
        item.isChecked = select.isChecked;
      }
    })
  }

  voltar(){
    this.router.navigate(['/escolher-servidor-alunos'])
  }

  ionViewWillEnter() {

    this.usuarios = [];
    this.start = 0;
    this.carregarUsuarios()

  }

  carregarUsuarios() {
    return new Promise(resolve => {
      this.usuarios = [];
      let dados = {
        requisicao: 'listar_professor_votar',
        nome: this.nome,
        email: this.email,
        senha: this.senha,
        idCurso: this.idCurso,
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

  async cadastrar() {
    if (this.idUsuario =="") {
      const toast = await this.toastController.create({
        message: 'selecione pelo o menos um !',
        duration: 1000
      });
      toast.present();
    } else {

      this.usuarios.forEach(item => {

        if (item.isChecked) {
          this.idUsuario = item.id;

          console.log("tetste")
          console.log(this.idUsuario)

          return new Promise(resolve => {
            let dados = {
              requisicao: 'add-participante-servidor-professor',
              id: this.idUsuario
            };
            this.provider.dadosApi(dados, 'apiVot.php').subscribe(data => {
              this.mensagemSalvar();

            });
          });
        }

      })
      this.router.navigate(['/participante']);
    }

  }

  async mensagemSalvar() {
    const toast = await this.toastController.create({
      message: 'Salvo com Sucesso!',
      duration: 1000
    });
    toast.present();
  }

 

}
