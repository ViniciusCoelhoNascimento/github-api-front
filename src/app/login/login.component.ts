import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private route: ActivatedRoute, private router: Router){}

  async loginComGithub() {
    window.open('http://127.0.0.1:3000/auth/github', '')
  }
}
