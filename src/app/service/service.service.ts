import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiGetRepos = 'http://localhost:3000/get-repos';
  private apiPostFavorite = 'http://localhost:3000/repos/favorite';

  constructor() {}

  async getRepositories() : Promise<JSON> {
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

    return await response.json();
  }
}
