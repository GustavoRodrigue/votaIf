import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventos-escolher-prof-serv',
  templateUrl: './eventos-escolher-prof-serv.page.html',
  styleUrls: ['./eventos-escolher-prof-serv.page.scss'],
})
export class EventosEscolherProfServPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  professores(){
    this.router.navigate(['/eventos-responsavel-professor']);
  }
  
  tecnicos(){
    this.router.navigate(['/eventos-responsavel-servidor']);
  }
  voltar(){
    this.router.navigate(['/eventos-responsavel-votacao'])
  }

}
