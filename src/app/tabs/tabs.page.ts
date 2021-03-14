import { Component } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router, NavigationEnd } from '@angular/router';
import { Post } from '../../services/post';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {


  urlTurmas : string = "turmas";
  urlCursos:string = "cursos";
  nivel : string;
  dadosLogin : any;
  nome: string;

  

  constructor(private storage: NativeStorage, private router: Router, private provider: Post, public toast: ToastController) { 
    
    
  }
  ngOnInit() {
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
  votacao(){
    this.router.navigate(['tabs/votacao'])
  }
  
  teste(){
    console.log(this.nivel)
  }

 

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
    

