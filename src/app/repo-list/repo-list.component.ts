import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-repo-list',
  imports: [],
  templateUrl: './repo-list.component.html',
  styleUrl: './repo-list.component.scss'
})
export class RepoListComponent {
  repos: any[] = [];

  constructor(private apiService: ServiceService) {

  }

  async getRepositories(){
    const json = await this.apiService.getRepositories();
    //console.log('repositories: ' + JSON.stringify(json,null,2))
    console.log(json)
  }
  ngonInit() {
    
  }

  onPost(repoId: number) {

  }
}
