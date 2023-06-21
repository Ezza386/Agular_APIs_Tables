import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = 'https://random-data-api.com/api/v2/users';
  constructor(private http:HttpClient) { }
  getUsers(){
    return this.http.get<any>(this.url);
  }
}
