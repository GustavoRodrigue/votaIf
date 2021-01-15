import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  dadosLogin: any;
  nivel: string;

  constructor(private router: Router, private provider: Post, private storage: NativeStorage) { }


  ngOnInit() {
  }
  conta() {
    this.router.navigate(['/tabs/conta'])
  }

  // logout(){
  //   this.storage.clear();
  //   this.router.navigate(['/login']);
  // }
  // ionViewWillEnter() {
  //   this.storage.getItem('session_storage').then((res) => {
  //     this.dadosLogin = res;
  //     this.nivel = this.dadosLogin.nivel;

  //   });
   

  } 
 




