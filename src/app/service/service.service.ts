import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repo } from '../interfaces/repo';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiGetRepos = 'http://localhost:3000/get-repos';
  private apiGetFavorites = 'http://localhost:3000/repos/favorites';
  private apiPostFavorite = 'http://localhost:3000/repos/favorite';
  private apiPostNewRep = 'http://localhost:3000/repos';

  constructor() {}

  async getRepositories() : Promise<Repo[]> {
    const JWTtoken = localStorage.getItem('JWTtoken')
    const response = await fetch(this.apiGetRepos, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${JWTtoken}`,
        'Content-Type': 'application/json'
      }
    });
    if(!response.ok){
      throw new Error(`Erro ao buscar repositorios: ${response.status}`);
    }
    const repositories = await response.json()

    const repoList: Repo[] = repositories.map((repo: { name: string })=> ({
      name: repo.name
    }));
    return repoList;
  }

  async getFavorites() : Promise<Repo[]> {
    const JWTtoken = localStorage.getItem('JWTtoken')
    const response = await fetch(this.apiGetFavorites, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${JWTtoken}`,
        'Content-Type': 'application/json'
      }
    });
    if(!response.ok){
      throw new Error(`Erro ao buscar favoritos: ${response.status}`);
    }
    const repositories = await response.json()
    const repoList: Repo[] = repositories.map((repo: { name: string })=> ({
      name: repo.name
    }));
    return repoList;
    //return repositories.map((repo: { name: string }) => repo.name);
  }

  async postFavorite(name: string){
    const JWTtoken = localStorage.getItem('JWTtoken');
    const response = await fetch(this.apiPostFavorite, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${JWTtoken}`,
        'Content-Type': 'application/json'
      },
      body: name ? JSON.stringify({repo_name: name}) : null
    });

    if(!response.ok){
      throw new Error(`Erro ao favoritar: ${response.status}`);
    }
  }

  async postNewRepo(name: string){
    const JWTtoken = localStorage.getItem('JWTtoken');
    const response = await fetch(this.apiPostNewRep, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${JWTtoken}`,
        'Content-Type': 'application/json'
      },
      body: name ? JSON.stringify({name: name}) : null
    });

    if(!response.ok){
      throw new Error(`Erro ao criar um novo repositório: ${response.status}`);
    }
  }
}
