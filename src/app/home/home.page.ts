import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  dadosLogin : any;
  nome : string;

  constructor( private router: Router, private storage: NativeStorage) { }

  // logout(){
  //   this.storage.clear();
  //   this.router.navigate(['/login']);
  // }
  // ionViewWillEnter(){
  //   this.storage.getItem('session_storage').then((res)=>{
  //     this.dadosLogin = res;
  //     this.nome = this.dadosLogin.nome;
      
  //   }); 

    
  // }

  ngOnInit() {
  }
  conta(){
    this.router.navigate(['/tabs/conta'])
  }

}
