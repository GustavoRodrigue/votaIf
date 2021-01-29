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
  cpf: string = "";
  telefone: string = "";
  status: string = "Aguardando";
  limit: number = 15;
  start: number = 0;
  constructor(private actRouter: ActivatedRoute, private router: Router, private provider: Post, public toastController: ToastController) { }

  async mensagemSalvar(texto) {
    const toast = await this.toastController.create({
      message: texto,
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
      this.cpf = data.cpf;
      this.telefone = data.telefone;
    });

  }
  telaInicial() {
    this.router.navigate(['/tela-inicial'])
  }
  async cadastrar() {
    if (!this.nome || !this.email || !this.cpf || !this.telefone || !this.senha) {

      const toast = await this.toastController.create({
        message: 'Aviso! Preencha todos os campos!',
        duration: 2000,
        color: 'warning'
      });
      toast.present();

      return;
    } else {
      return new Promise(resolve => {
        let dados = {
          requisicao: 'add_servidor',
          nome: this.nome,
          email: this.email,
          senha: this.senha,
          nivel: this.nivel,
          status: this.status,
          cpf: this.cpf,
          telefone: this.telefone,
        };
        this.provider.dadosApi(dados, 'apiAdm.php').subscribe(data => {

          this.mensagemSalvar(data['result']);
          if (data['result'] == 'Salvo com Sucesso!') {
            this.router.navigate(['/login']);

          }
        });
      });
    }
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
        status: this.status,
        cpf: this.cpf,
        telefone: this.telefone
      };
      this.provider.dadosApi(dados, 'apiAdm.php').subscribe(data => {
        this.router.navigate(['/tela-inicial']);

        // this.mensagemSalvar();
      });
    });
  }


}


