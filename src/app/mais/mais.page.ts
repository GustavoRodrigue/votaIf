import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mais',
  templateUrl: './mais.page.html',
  styleUrls: ['./mais.page.scss'],
})
export class MaisPage implements OnInit {
 

  constructor(private router: Router) {

  }

  ngOnInit(){

  }
  cursos() {
    this.router.navigate(['/tabs/cursos'])
  }
  turmas(){
    this.router.navigate(['/tabs/turmas'])
  }
  conta(){
    this.router.navigate(['/tabs/conta'])
  }
  servidor(){
    this.router.navigate(['/tabs/servidor'])
  }

  
}
