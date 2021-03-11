import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Post } from 'src/services/post';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  dadosLogin: any;
  nivel: string;
  imgURL;

  constructor(private router: Router, private provider: Post, private storage: NativeStorage, private camera: Camera) { }


  ngOnInit() {
  }
  conta() {
    this.router.navigate(['/tabs/conta'])
  }

  getCamera() {
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL
    }).then((res) => {
      console.log(res);
      this.imgURL = 'data:image/jpeg;base64,' + res;

    }).catch(e => {
      console.log(e);
    })

  }


  getGallery() {

    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG
    }).then((res) => {
      console.log(res);
      this.imgURL = 'data:image/jpeg;base64,' + res;
    }).catch(e => {
      console.log(e);
    })


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
 




