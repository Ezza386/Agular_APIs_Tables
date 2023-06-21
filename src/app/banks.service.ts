import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BanksService {
  private url = 'https://random-data-api.com/api/v2/banks';
 
  getBanks(){
    return this.http.get<any>(this.url);
  }
  constructor(private http:HttpClient) { }
}
