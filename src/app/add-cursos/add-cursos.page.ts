import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/services/post';
import { ToastController } from '@ionic/angular';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-add-cursos',
  templateUrl: './add-cursos.page.html',
  styleUrls: ['./add-cursos.page.scss'],
})
export class AddCursosPage implements OnInit {

  id: string = "";
  nome: string = "";

  constructor(private actRouter: ActivatedRoute, private router: Router, private provider: Post, public toastController: ToastController) { }

  async mensagemSalvar() {
    const toast = await this.toastController.create({
      message: 'Salvo com Sucesso!',
      duration: 1000
    });
    toast.present();
  }

  ngOnInit() {
    //recupera para editar
    this.actRouter.params.subscribe((data: any) => {
      this.id = data.id;
      this.nome = data.nome;

    });
  }
  cursos() {
    this.router.navigate(['tabs/cursos'])
  }
  async cadastrar() {

    if (!this.nome) {

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
          requisicao: 'add-cursos',
          nome: this.nome,

        };

        this.provider.dadosApi(dados, 'apiAdm.php').subscribe(data => {

          console.log(dados);
          this.router.navigate(['tabs/cursos']);
          this.mensagemSalvar();
        });
      });
    }

  };

  async editar() {
    if (!this.nome) {

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
          requisicao: 'editar_cursos',
          id: this.id,
          nome: this.nome,

        };
        this.provider.dadosApi(dados, 'apiAdm.php').subscribe(data => {

          this.router.navigate(['tabs/cursos']);
          this.mensagemSalvar();
        });
      });
    }
  }


}

