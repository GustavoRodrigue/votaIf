import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nivel-usuarios',
  templateUrl: './nivel-usuarios.page.html',
  styleUrls: ['./nivel-usuarios.page.scss'],
})
export class NivelUsuariosPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  alunos(){
    this.router.navigate(['/add-alunos'])
  }
  professor(){
    this.router.navigate(['/add-professor'])
  }

}
