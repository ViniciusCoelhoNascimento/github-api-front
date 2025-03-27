import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Repo } from '../interfaces/repo';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-favorites-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './favorites-list.component.html',
  styleUrl: './favorites-list.component.scss'
})
export class FavoritesListComponent {
  repositories: Repo[] = [];

  constructor(private apiService: ServiceService) {
  }

  async ngOnInit(){
    await this.getFavoritesRepositories();
  }

  async getFavoritesRepositories(){
    const lrepositories: Repo[] = await this.apiService.getFavorites();

    lrepositories.forEach(repo => {
      this.repositories.push(repo)
    });
  }
}
