import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserResponse } from './user.interface';

@Injectable({providedIn: 'root'})
export class UserService {
  httpClient = inject(HttpClient);

  getDogBreeds(){
    return this.httpClient.get<UserResponse>('https://dogapi.dog/api/v2/breeds');
  }
}
