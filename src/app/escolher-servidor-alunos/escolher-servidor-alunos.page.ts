import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-escolher-servidor-alunos',
  templateUrl: './escolher-servidor-alunos.page.html',
  styleUrls: ['./escolher-servidor-alunos.page.scss'],
})
export class EscolherServidorAlunosPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  alunos(){
    this.router.navigate(['/add-participante']);// adicionar cursos
  }
  
  servidor(){
    this.router.navigate(['/escolher-tecnicos-servidor']);
  }
  voltar(){
    this.router.navigate(['/participante'])
   }

}
