import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Banks } from './Banks';

@Injectable({
  providedIn: 'root'
})
export class BanksService {
  private url = 'https://random-data-api.com/api/v2/banks';
 
  getBanks(){
    const params = {
      size:25
    }
    return this.http.get<Banks>(this.url,{params:params});
  }
  constructor(private http:HttpClient) { }
}
