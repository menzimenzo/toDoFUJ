import { Component, OnInit } from '@angular/core';
import { getCheckNoChangesMode } from '@angular/core/src/render3/state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {
    // injecter un service dans le composant
  }

  ngOnInit() {
  }
  gohome() {
    // console.log('retour à la page d\'accueil');
    this.router.navigate(['/']);
  }
}
