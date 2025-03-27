import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Repo } from '../interfaces/repo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-repo-list',
  imports: [CommonModule],
  templateUrl: './repo-list.component.html',
  styleUrl: './repo-list.component.scss'
})
export class RepoListComponent {
  repositories: Repo[] = [];

  constructor(private apiService: ServiceService) {
    //this.getRepositories();
  }

  async ngOnInit(){
    //console.log('chamou on init')
    await this.getRepositories();
  }

  async getRepositories(){
    console.log('get repositories')
    const repositories: Repo[] = await this.apiService.getRepositories();

    repositories.forEach(repo => {
      this.repositories.push(repo)
      
    });
    //console.log('repo list: ' + this.repositories[0].id + this.repositories[0].name)
    //console.log('repositories: ' + JSON.stringify(json,null,2))
  }

  favorite(repoId: number) {
    this.apiService.postFavorite(repoId);
  }
}
