import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ToastController } from '@ionic/angular';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-tabs-aluno',
  templateUrl: './tabs-aluno.page.html',
  styleUrls: ['./tabs-aluno.page.scss'],
})
export class TabsAlunoPage {

  urlTurmas : string = "turmas";
  urlCursos:string = "cursos";
  nivel : string;
  dadosLogin : any;
  

  constructor(private storage: NativeStorage, private router: Router, private provider: Post, public toast: ToastController) { 
    
    
  }
 
  
  ionViewWillEnter(){
    this.storage.getItem('session_storage').then((res)=>{
      this.dadosLogin = res;
      this.nivel = this.dadosLogin.nivel;
     
    }); 
  }
  cursos() {
    this.router.navigate(['tabs/cursos'])
  }
  turmas() {
    this.router.navigate(['tabs/turmas'])
  }
  
  teste(){
    console.log(this.nivel)
  }

  carregar(){
    return new Promise(resolve => {
      
      let dados = {
        requisicao : 'listar',
         
         };

        this.provider.dadosApi(dados, 'api.php').subscribe(data => {

          if(data['success']) {
            this.nivel = data['result']['nivel'];
          }
          
          
        
    });
  });

}

//   recuperar(){
//     if(this.nivel =="Admin"){
//  // this.storage.setItem('session_storage', data['result']);
        
//           this.router.navigate([ '/tabs/home']);      
//           this.router.navigate([ '/tabs/votacao']);        
//           this.router.navigate([ '/tabs/usuarios']);
//           this.router.navigate([ '/tabs/cursos']);
//           this.router.navigate([ '/tabs/turmas']);
//     }else if(this.nivel =="aluno"){
//       this.router.navigate([ '/tabs/home']);      
//       this.router.navigate([ '/tabs/votacao']); 
//     }else if(this.nivel =="professor"){
//       this.router.navigate([ '/tabs/home']);      
//       this.router.navigate([ '/tabs/votacao']); 
//     }else if(this.nivel =="servidor"){
//       this.router.navigate([ '/tabs/home']);      
//       this.router.navigate([ '/tabs/votacao']); 
//     }
//   }
    
}
