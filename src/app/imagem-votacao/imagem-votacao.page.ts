import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, ToastController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-imagem-votacao',
  templateUrl: './imagem-votacao.page.html',
  styleUrls: ['./imagem-votacao.page.scss'],
})
export class ImagemVotacaoPage implements OnInit {

  imagens: any = [];


  nome: string = "";
  email: string = "";
  senha: string = "";
  curso: number = 0;
  turma: number = 0;
  cpf: string = "";
  telefone: string = "";
  nomeCurso: string = "";
  nomeTurma: string = "";
  status: string = "aguardando";
  nivel: string = "";
  cameraData: string = "";
  base64image: string = "";
  server: string;
  constructor(private actRouter: ActivatedRoute, private provider: Post, private storage: NativeStorage, private router: Router,
    private camera: Camera, public actionSheetController: ActionSheetController, public toastController: ToastController) {
    this.server = provider.server;
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.imagens = [];

    // this.carregar();
  }

  addimagem() {
    return new Promise(resolve => {

      let dados = {
        requisicao: 'add_imagem_votacao',
        imagem: this.cameraData,

      };

      this.provider.dadosApi(dados, 'apiAdm.php').subscribe(data => {
        this.ionViewWillEnter();

        this.mensagemSalvar();
      });
    });
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Escolha uma opção',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Camera',
        icon: 'camera',
        handler: () => {
          console.log('camera');
          this.getCamera();
          // if(this.imagem !=""){
          //   this.addimagem(id)
          // }
        }
      }, {
        text: 'Galeria',
        icon: 'image',
        handler: () => {
          console.log('Share clicked');
          this.getGallery();
          // if(this.imagem !=""){
          //   this.addimagem(id)
          // }

        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
          this.ionViewWillEnter();

        }
      }]
    });

    await actionSheet.present();
  }


  getCamera() {


    const options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      // allowEdit: true,

    }

    this.camera.getPicture(options)
      .then((imageData) => {
        this.cameraData = imageData;
        this.base64image = 'data:image/jpeg;base64,' + imageData;
      }, (error) => {
        console.error(error);
      })
      .catch((error) => {
        console.error(error);
      })


  }


  getGallery() {


    const options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      // allowEdit: true,

    }

    this.camera.getPicture(options)
      .then((imageData) => {
        this.cameraData = imageData;
        this.base64image = 'data:image/jpeg;base64,' + imageData;
      }, (error) => {
        console.error(error);
      })
      .catch((error) => {
        console.error(error);
      })


  }


  async mensagemSalvar() {
    const toast = await this.toastController.create({
      message: "Salvo com sucesso",
      duration: 1000
    });
    toast.present();
  }


}
