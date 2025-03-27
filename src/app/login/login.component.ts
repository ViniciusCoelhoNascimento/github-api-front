import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(){}

  async loginComGithub() {
    window.open('http://127.0.0.1:3000/auth/github', '')
  }
}
