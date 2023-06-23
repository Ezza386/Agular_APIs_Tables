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
  sortDirection: string = 'asc'; // Default sort direction
  sortField: string = 'id'; // Default sort field
  size!:number;
  ngOnInit(): void {
    this.fetchBanks();
    
  }
constructor(private service:BanksService){

}
fetchBanks():void{
  this.service.getBanks(this.size).subscribe((response) => { // donot use any
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
sortBanks(): void {
  this.filteredaccounts.sort((a, b) => {
    const valueA = this.getFieldValue(a);
    const valueB = this.getFieldValue(b);

    if (this.sortField === 'id') {
      if (this.sortDirection === 'asc') {
        return valueA - valueB; // Compare as numbers in ascending order
      } else {
        return valueB - valueA; // Compare as numbers in descending order
      }
    } else {
      if (this.sortDirection === 'asc') {
        return valueA.localeCompare(valueB); // Compare as strings in ascending order
      } else {
        return valueB.localeCompare(valueA); // Compare as strings in descending order
      }
    }
  });
}

toggleSortDirection(): void {
  this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  this.sortBanks();
}

changeSortField(field: string): void {
  this.sortField = field;
  this.sortBanks();
}

getFieldValue(bank: Banks):any {


  switch (this.sortField) {
    case 'id':
      return bank.id;
    case 'account_number':
      return bank.account_number;

    default:
      return '';
  }
}

}

