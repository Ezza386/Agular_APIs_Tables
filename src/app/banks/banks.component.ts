import { Component, OnInit } from '@angular/core';
import { BanksService } from '../banks.service';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent implements OnInit{
  banks:any[] = [];
  searchTerm: string = '';
  filteredaccounts: any[] = [];
  errorMessage:string='No users found';
  searchField: string = 'IBAN';
  ngOnInit(): void {
    this.service.getBanks().subscribe((response: any) => { // donot use any
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
//Array<Ba>
}
filterAccounts() {
  if (this.searchTerm.trim() !== '') {
    this.filteredaccounts = this.banks.filter((bank: any) => {
      const fieldValue = bank[this.searchField]?.toString().toLowerCase();
      if (this.searchField === 'IBAN') {
        return fieldValue === this.searchTerm.toLowerCase();
      } else {
        return fieldValue.includes(this.searchTerm.toLowerCase());
      }
    });
  } else {
    this.filteredaccounts = this.banks;
  }
}

}

