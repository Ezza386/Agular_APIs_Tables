import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Banks } from './Banks';

@Injectable({
  providedIn: 'root'
})
export class BanksService {
  private url = 'https://random-data-api.com/api/v2/banks';
 
  getBanks(size: number){
    const params = new HttpParams().set('size', size.toString());
    return this.http.get<Banks>(this.url,{params:params});
  }
  constructor(private http:HttpClient) { }
}
