import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-mostrar-servidor',
  templateUrl: './mostrar-servidor.page.html',
  styleUrls: ['./mostrar-servidor.page.scss'],
})
export class MostrarServidorPage implements OnInit {

  id: string = "";
  nome: string = "";
  email: string = "";
  nivel: string = "";
  cpf: string = "";
  status : string ="";
  telefone: string ="";
 
  constructor(private actRouter: ActivatedRoute, private router: Router, private provider: Post,  public toastController: ToastController) { }

  ngOnInit() {
      //recupera para editar
      this.actRouter.params.subscribe((data: any) => {
        this.id = data.id;
        this.nome = data.nome;
        this.cpf = data.cpf;
        this.telefone = data.telefone;
        this.email = data.email;
        this.nivel = data.nivel;
        this.status = data.status;
      
      });
      
  }
  ionViewWillEnter() {
    
  }
  aprovarProfessor(id){
    return new Promise(resolve => {
      
      let dados = {
        requisicao : 'aprovar_professor',
        id : id, 
        
        };

        this.provider.dadosApi(dados, 'apiAdm.php').subscribe(data => {
         this.professor();
        });
    });
  }

  aprovarServidor(id){
    return new Promise(resolve => {
      
      let dados = {
        requisicao : 'aprovar_servidor',
        id : id, 
        
        };

        this.provider.dadosApi(dados, 'apiAdm.php').subscribe(data => {
         this.servidor();
        });
    });
  }

  servidor(){
    // this.router.navigate(['/servidor'])
    this.router.navigate(['/tabs/servidor'])
  }
  professor(){
    // this.router.navigate(['/professor'])
    this.router.navigate(['/tabs/professor'])
  }

}
