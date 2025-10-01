import { Component, inject, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.interface';
import { CommonModule } from '@angular/common';
import { IsAlergicDirective } from './is-alergic.directive';
import { isAlergicPipe } from './is-alergic.pipe';

@Component({
  selector: 'app-user',
  standalone:true,
  imports:[CommonModule,IsAlergicDirective,isAlergicPipe],
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.scss'],
})
export class UserComponent implements OnInit {
  userService = inject(UserService);
  users: User[] = [];

  ngOnInit(): void {
      this.fetchDogBreeds();
  }

  fetchDogBreeds(){
    this.userService.getDogBreeds().subscribe(
      response => {
        this.users = response.data;
      },
      error => {
        console.error('Error fetching dog breeds:', error);
      }
    );
  }

}
