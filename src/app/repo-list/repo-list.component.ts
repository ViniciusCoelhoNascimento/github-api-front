import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Repo } from '../interfaces/repo';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-repo-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './repo-list.component.html',
  styleUrl: './repo-list.component.scss'
})
export class RepoListComponent {
  repositories: Repo[] = [];

  constructor(private apiService: ServiceService) {
  }

  async ngOnInit(){
    await this.getRepositories();
  }

  async getRepositories(){
    const repositories: Repo[] = await this.apiService.getRepositories();

    repositories.forEach(repo => {
      this.repositories.push(repo)
      
    });
  }

  favorite(repoName: string) {
    this.apiService.postFavorite(repoName);
  }
}
