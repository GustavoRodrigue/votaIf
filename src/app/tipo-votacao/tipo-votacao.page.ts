import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipo-votacao',
  templateUrl: './tipo-votacao.page.html',
  styleUrls: ['./tipo-votacao.page.scss'],
})
export class TipoVotacaoPage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
  eleicao(){
    this.router.navigate(['/add-alunos']);
  }
  eventos(){

  }
  trabalhos(){

  }

}
