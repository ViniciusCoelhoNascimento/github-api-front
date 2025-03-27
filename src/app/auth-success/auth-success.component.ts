import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth-success',
  imports: [],
  templateUrl: './auth-success.component.html',
  styleUrl: './auth-success.component.scss'
})
export class AuthSuccessComponent {

  constructor(private route: ActivatedRoute, private router: Router){}
  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      if (token) {
        localStorage.setItem('JWTtoken', token);
        this.router.navigate(['/repo-list'])
      }
    })
  }
}
