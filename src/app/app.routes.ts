import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RepoListComponent } from './repo-list/repo-list.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';
import { AuthSuccessComponent } from './auth-success/auth-success.component';
import { CreateRepoComponent } from './create-repo/create-repo.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'repo-list',
        component: RepoListComponent
    },
    {
        path: 'favorites',
        component: FavoritesListComponent
    },
    {
        path: 'auth-success',
        component: AuthSuccessComponent
    },
    {
        path: 'create-repo',
        component: CreateRepoComponent
    },
];
