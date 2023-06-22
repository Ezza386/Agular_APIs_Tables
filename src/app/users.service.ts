import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './Users';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // private url = ;
  constructor(private http:HttpClient) { }
  getUsers(){
    const params = {
      size:25
    }
    return this.http.get<Users>('https://random-data-api.com/api/v2/users',{params:params});
  }
}
