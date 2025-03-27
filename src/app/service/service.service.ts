import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repo } from '../interfaces/repo';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiGetRepos = 'http://localhost:3000/get-repos';
  private apiPostFavorite = 'http://localhost:3000/repos/favorite';

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

    const repoList: Repo[] = repositories.map((repo: { id: number; name: string })=> ({
      id: repo.id,
      name: repo.name
    }));

    //console.log('repo list: ' + repoList[0].id + repoList[0].name)

    return repoList;
  }
  async postFavorite(idRepos: number){

  }
}
