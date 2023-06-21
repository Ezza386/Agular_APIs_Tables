import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressesService {
  private url = 'https://random-data-api.com/api/v2/addresses';
 
  getAddresses(){
    return this.http.get<any>(this.url);
  }
  constructor(private http:HttpClient) { }
}
