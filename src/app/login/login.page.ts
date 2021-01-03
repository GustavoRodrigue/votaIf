import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';
import { Post } from 'src/services/post';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = "";
  senha: string = "";

  constructor(private storage: NativeStorage, private router: Router, private provider: Post, public toast: ToastController) { }

  ngOnInit() {
  }
  

  async login() {
    if (this.email == "") {
      const toast = await this.toast.create({
        message: 'Preencha o Email',
        duration: 2000,
        color: 'warning'
      });
      toast.present();
      return;
    }

    if (this.senha == "") {
      const toast = await this.toast.create({
        message: 'Preencha a Senha',
        duration: 2000,
        color: 'warning'
      });
      toast.present();
      return;
    }



    let dados = {
      requisicao: 'login',
      email: this.email,
      senha: this.senha

    };

    this.provider.dadosApi(dados, 'apiAdm.php').subscribe(async data => {
      var alert = data['msg'];
      if (data['success']) {
        this.storage.setItem('session_storage', data['result']);
        this.router.navigate(['/tabs/home']);
        // if(data['result']['nivel'] === 'Admin'){
        //   this.router.navigate([ '/tabs/home']);
        // }else if(data['result']['nivel'] === 'aluno'){
       
        //   this.router.navigate([ 'tabs/votacao']);

        // }else if(data['result']['nivel'] === 'servidor'){
        //   this.router.navigate([ 'tabs/usuarios']);
        //   this.router.navigate([ 'tabs/votacao']);

        // }else if(data['result']['nivel'] === 'professor'){
        //   this.router.navigate([ '/usuarios']);
        //   this.router.navigate([ '/votacao']);
        // }



        const toast = await this.toast.create({
          message: 'Logado com Sucesso!!',
          duration: 1000,
          color: 'success'
        });
        toast.present();
        this.email = "";
        this.senha = "";
        console.log(data);
      } else {
        const toast = await this.toast.create({
          message: alert,
          duration: 2000,
          color: 'danger'
        });
        toast.present();
      }


    });



  }


}
