import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, ToastController } from '@ionic/angular';
import { Camera,CameraOptions } from '@ionic-native/camera/ngx';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.page.html',
  styleUrls: ['./conta.page.scss'],
})
export class ContaPage implements OnInit {
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
  server:string;
  
  constructor(private actRouter: ActivatedRoute, private provider: Post, private storage: NativeStorage, private router: Router, 
    private camera: Camera, public actionSheetController: ActionSheetController, public toastController: ToastController) {
      this.server = provider.server;
     }

    ngOnInit() {
      //recupera para editar
      this.actRouter.params.subscribe((data: any) => {
        //this.id = data.id;
        this.nome = data.nome;
        this.email = data.email;
        this.cpf = data.cpf;
        this.telefone = data.telefone;
        this.senha = data.senha;
        this.curso = data.curso;
        this.turma = data.turma;
        this.nivel = data.nivel;
        
      });
    }
  ionViewWillEnter() {
    this.imagens = [];

    this.carregar();
  }

  carregar() {
    return new Promise(resolve => {

      let dados = {
        requisicao: 'imagem',
        imagem: this.base64image
      };
      this.provider.dadosApi(dados, 'apiAdm.php').subscribe(data => {
        if (data['result'] == '0') {

          this.ionViewWillEnter();

        } else {
          for (let img of data['result']) {
            this.imagens.push(img);
            
          }
        }
        
        resolve(true);
      });
    });
  }
  logout() {
    this.storage.clear();
    this.router.navigate(['/login']);
  }
  mais() {
    this.router.navigate(['/tabs/mais'])
  }
 
    
  }
