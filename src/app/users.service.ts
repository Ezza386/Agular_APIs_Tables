import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Users } from './Users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

  getUsers(size: number) {
    const params = new HttpParams().set('size', size.toString());

    return this.http.get<Users>('https://random-data-api.com/api/v2/users', { params });
  }
}
