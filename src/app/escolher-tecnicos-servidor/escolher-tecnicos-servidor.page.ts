import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-escolher-tecnicos-servidor',
  templateUrl: './escolher-tecnicos-servidor.page.html',
  styleUrls: ['./escolher-tecnicos-servidor.page.scss'],
})
export class EscolherTecnicosServidorPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  professores(){
    this.router.navigate(['/add-participante-professor']);// adicionar cursos
  }
  
  tecnicos(){
    this.router.navigate(['/add-participante-servidor']);
  }
  voltar(){
    this.router.navigate(['/participante'])
  }

}
