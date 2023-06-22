import { Component, OnInit } from '@angular/core';
import { BanksService } from '../banks.service';
import { Banks } from '../Banks';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent implements OnInit{
  banks:Banks[] = [];
  searchTerm: string = '';
  filteredaccounts: Banks[] = [];
  errorMessage:string='No users found';
  searchField: string = 'iban';
  bankSize!: number;
  ngOnInit(): void {
    this.service.getBanks().subscribe((response) => { // donot use any
      if (Array.isArray(response)) {
        this.banks = response;
      } else if (typeof response === 'object' && !Array.isArray(response)) {
        this.banks = [response];
      } else {
        console.error('Invalid API response:', response);
      }
      this.filterAccounts();
    });
    
  }
constructor(private service:BanksService){

}

filterAccounts(): void {
  if (this.searchTerm.trim() !== '') {
    this.filteredaccounts = this.banks.filter((bank) => {
      const fieldValue = bank.account_number.toString().toLowerCase();
      return fieldValue.includes(this.searchTerm.toLowerCase());
    });
  } else {
    this.filteredaccounts = this.banks;
  }
}


}

