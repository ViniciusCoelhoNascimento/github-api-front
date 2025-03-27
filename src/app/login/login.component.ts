import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(){}

  //backendURL = 'http://127.0.0.1:3000/auth/github'
  backendURL = 'http://127.0.0.1:3000/teste'

  async loginComGithub() : Promise<JSON> {
    console.log('chamou')
    const data = await fetch(this.backendURL)
    return await data.json();

  }
}
