import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Repo } from '../interfaces/repo';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-repo',
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './create-repo.component.html',
  styleUrl: './create-repo.component.scss'
})
export class CreateRepoComponent {

  constructor(private apiService: ServiceService, private router: Router){

  }
  applyForm = new FormGroup({
    name: new FormControl(''),
  });

  async submitRepo(){
    const name: string = this.applyForm.value.name ?? '';

    try{
      await this.apiService.postNewRepo(name);
    }catch(error){
      console.log('Erro ao enviar formulário: ' + error)
    }finally {
      this.router.navigate(['/repo-list']);
    }
  }

}
