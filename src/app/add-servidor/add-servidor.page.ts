import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-add-servidor',
  templateUrl: './add-servidor.page.html',
  styleUrls: ['./add-servidor.page.scss'],
})
export class AddServidorPage implements OnInit {

  id: string = "";
  nome: string = "";
  email: string = "";
  senha: string = "";
  nivel: string = "professor";
  
  status: string = "Aguardando";
  limit: number = 15;
  start: number = 0;
  constructor(private actRouter: ActivatedRoute, private router: Router, private provider: Post,  public toastController: ToastController) { }

  async mensagemSalvar() {
    const toast = await this.toastController.create({
      message: 'Salvo com Sucesso!',
      duration: 1000
    });
    toast.present();
  }
  ionViewWillEnter() {

    this.start = 0;
  
  }

  ngOnInit() {
    //recupera para editar
    this.actRouter.params.subscribe((data: any) => {
      this.id = data.id;
      this.nome = data.nome;
      this.email = data.email;
      this.senha = data.senha;
    
    });
    
  }
  telaInicial() {
    this.router.navigate(['/tela-inicial'])
  }
  cadastrar() {
    return new Promise(resolve => {
      let dados = {
        requisicao: 'add_servidor',
        nome: this.nome,
        email: this.email,
        senha: this.senha,
        nivel: this.nivel,
        status: this.status
      };
      this.provider.dadosApi(dados, 'apiAdm.php').subscribe(data => {
      
        this.router.navigate(['/login']);
      
        this.mensagemSalvar();
      });
    });
  }
  editar() {
    return new Promise(resolve => {
      let dados = {
        requisicao: 'editar_servidor',
        id: this.id,
        nome: this.nome,
        email: this.email,
        senha: this.senha,
        nivel: this.nivel,
        status: this.status
      };
      this.provider.dadosApi(dados, 'apiAdm.php').subscribe(data => {
        this.router.navigate(['/tela-inicial']);
      
        this.mensagemSalvar();
      });
    });
  }
 

}


