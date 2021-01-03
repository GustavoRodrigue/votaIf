import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.page.html',
  styleUrls: ['./conta.page.scss'],
})
export class ContaPage implements OnInit {

  constructor(private storage: NativeStorage, private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.storage.clear();
    this.router.navigate(['/login']); 
  }
  mais(){
    this.router.navigate(['/tabs/mais'])
  }
}
