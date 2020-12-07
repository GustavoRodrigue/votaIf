import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../services/post';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-mostrar-votacao',
  templateUrl: './mostrar-votacao.page.html',
  styleUrls: ['./mostrar-votacao.page.scss'],
})
export class MostrarVotacaoPage implements OnInit {
  id: string = "";
  nome: string = "";
  descricao: string = "";
  tipo: string = "";
  inicio: string = "";
  terminio: number = 0;
  status: string = "Aberta";
  curso: number = 0;
  turma: number = 0;
  nomeCurso: string = "";
  nomeTurma: string = "";

  constructor(
    private actRouter: ActivatedRoute, private router: Router, private provider: Post, public toastController: ToastController, public alertController: AlertController
  ) { }

  
  ngOnInit() {
    //recupera para editar
    this.actRouter.params.subscribe((data: any) => {
      this.id = data.id;
      this.nome = data.nome;
      this.descricao = data.descricao;
      this.tipo = data.tipo;
      this.inicio = data.inicio;
      this.terminio = data.terminio
      this.curso = data.curso;
      this.turma = data.turma;

    });
  }
}


