import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ToastController } from '@ionic/angular';
import { Post } from 'src/services/post';


@Component({
  selector: 'app-mais',
  templateUrl: './mais.page.html',
  styleUrls: ['./mais.page.scss'],
})
export class MaisPage implements OnInit {
 
  urlTurmas : string = "turmas";
  urlCursos:string = "cursos";
  nivel : string;
  dadosLogin : any;
  nome: string;


  constructor(private storage: NativeStorage, private router: Router, private provider: Post, public toast: ToastController) {

  }

  ionViewWillEnter(){
    this.storage.getItem('session_storage').then((res)=>{
      this.dadosLogin = res;
      this.nivel = this.dadosLogin.nivel;
     
    }); 
  }
  ngOnInit(){

  }
  cursos() {
    this.router.navigate(['/tabs/cursos'])
  }
  turmas(){
    this.router.navigate(['/tabs/turmas'])
  }
  conta(){
    this.router.navigate(['/tabs/conta'])
  }
  servidor(){
    this.router.navigate(['/tabs/servidor'])
  }

  
}
