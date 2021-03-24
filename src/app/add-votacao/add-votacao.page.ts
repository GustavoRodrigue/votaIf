import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../services/post';
import { ActionSheetController, ToastController } from '@ionic/angular';
import { Time } from '@angular/common';
import { Camera,CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-add-votacao',
  templateUrl: './add-votacao.page.html',
  styleUrls: ['./add-votacao.page.scss'],
})
export class AddVotacaoPage implements OnInit {
  imagens: any = [];
  cursos = [];
  turmas = [];
  id: string = "";
  nome: string = "";
  descricao: string = "";
  tipo: string = "";
  inicio: Date;
  hora_inicio: Time;
  terminio: Date;
  hora_terminio: Time;
  status: string = "Aberta";
  curso: number = 0;
  turma: number = 0;
  nomeCurso: string = "";
  nomeTurma: string = "";
  limit: number = 15;
  start: number = 0;

  cameraData: string = "";
  base64image: string = "";
  server:string;
  constructor(private camera: Camera, public actionSheetController: ActionSheetController,private actRouter: ActivatedRoute, private router: Router, private provider: Post, public toastController: ToastController) { }

  async mensagemSalvar() {
    const toast = await this.toastController.create({
      message: 'Salvo com Sucesso!',
      duration: 1000
    });
    toast.present();
  }
  ionViewWillEnter() {
    this.imagens = [];
    this.cursos = [];
    this.turmas = [];
    this.start = 0;
   
  }

  ngOnInit() {
    //recupera para editar
    this.actRouter.params.subscribe((data: any) => {
      this.id = data.id;
      this.nome = data.nome;
      this.descricao = data.descricao;
      this.inicio = data.inicio;
      this.hora_inicio = data.hora_inicio;
      this.terminio = data.terminio;
      this.hora_terminio = data.hora_terminio;
      this.tipo = data.tipo;
    });

  }
  votacao() {
    this.router.navigate(['tabs/votacao'])
  }
  async cadastrar() {

    if (!this.nome || !this.tipo || !this.inicio || !this.hora_inicio 
          || !this.hora_terminio) {

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
          requisicao: 'add-votacao',
          nome: this.nome,
          descricao: this.descricao,
          tipo: this.tipo,
          inicio: this.inicio,
          hora_inicio: this.hora_inicio,
          terminio: this.terminio,
          hora_terminio: this.hora_terminio,
          status: this.status,
        };
        this.provider.dadosApi(dados, 'apiVot.php').subscribe(data => {

          if(this.tipo == 'pessoas'){
            this.router.navigate(['/eleicao']);
           } else if(this.tipo == 'eventos'){
            this.router.navigate(['/eventos-responsavel-votacao']);
           }
          // if(this.tipo == 'eventos'){
          //   this.router.navigate(['tabs/votacao']);
          // }
          // if(this.tipo == 'trabalhos'){
          //   this.router.navigate(['tabs/votacao']);
          // }
         
          
        });
      });
    }
  }
  editar() {
    return new Promise(resolve => {
      let dados = {
        requisicao: 'editar-votacao',
        id: this.id,
        nome: this.nome,
        descricao: this.descricao,
        tipo: this.tipo,
        inicio: this.inicio,
        hora_inicio: this.hora_inicio,
        terminio: this.terminio,
        hora_terminio: this.hora_terminio,
        status: this.status
        
      };
      this.provider.dadosApi(dados, 'apiAdm.php').subscribe(data => {
        // this.router.navigate(['tabs/votacao']);
        this.mensagemSalvar();
      });
    });
  }
  carregarCursos() {
    return new Promise(resolve => {
      this.cursos = [];
      let dados = {
        requisicao: 'listar_cursos',

        nome: this.nomeCurso,
        limit: this.limit,
        start: this.start
      };
      this.provider.dadosApi(dados, 'apiAdm.php').subscribe(data => {
        if (data['result'] == '0') {

          this.ionViewWillEnter();

        } else {
          for (let curso of data['result']) {
            this.cursos.push(curso);

          }
        }

        resolve(true);
      });
    });
  }
  carregarTurmas() {
    return new Promise(resolve => {
      this.turmas = [];
      let dados = {
        requisicao: 'listar_turmas',
        nome: this.nomeTurma,
        limit: this.limit,
        start: this.start
      };
      this.provider.dadosApi(dados, 'apiAdm.php').subscribe(data => {
        if (data['result'] == '0') {

          this.ionViewWillEnter();

        } else {
          for (let turma of data['result']) {
            this.turmas.push(turma);

          }
        }

        resolve(true);

      });
    });
  }



  addimagem() {
    return new Promise(resolve => {

      let dados = {
        requisicao: 'add_imagem',
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


    
    


}