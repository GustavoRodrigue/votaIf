import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-mostrar-alunos',
  templateUrl: './mostrar-alunos.page.html',
  styleUrls: ['./mostrar-alunos.page.scss'],
})
export class MostrarAlunosPage implements OnInit {
  id: string = "";
  nome: string = "";
  email: string = "";
  nivel: string = "";
  idCurso: string = "";
  curso: string = "";
  turma: string ="";
  idTurma: string = "";
  status : string ="";
  nomeCurso: string = "";
  nomeTurma: string ="";
 
  constructor(private actRouter: ActivatedRoute, private router: Router, private provider: Post,  public toastController: ToastController) { }

  ngOnInit() {
      //recupera para editar
      this.actRouter.params.subscribe((data: any) => {
        this.id = data.id;
        this.nome = data.nome;
        this.email = data.email;
        this.curso = data.curso;
        this.turma = data.turma;
        this.nivel = data.nivel;
        this.status = data.status;
        this.nomeCurso = data.nomeCurso;
        this.nomeTurma = data.nomeTurma;
      });
      
  }
  ionViewWillEnter() {
    
  }

  aprovar(id){
    return new Promise(resolve => {
      
      let dados = {
        requisicao : 'aprovar_usuarios',
        id : id, 
        
        };

        this.provider.dadosApi(dados, 'api.php').subscribe(data => {
         this.alunos();
        });
    });
  }

  alunos(){
    this.router.navigate(['/alunos'])
    // this.router.navigate(['/tabs/alunos'])
  }

}
