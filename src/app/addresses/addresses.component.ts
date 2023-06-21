import { Component, OnInit } from '@angular/core';
import { AddressesService } from '../addresses.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit {
  addresses: any[] = [];
  filteredAddresses: any[] = [];
  searchTerm: string = '';
  searchField: string = 'building_number';

  constructor(private service: AddressesService) {}

  ngOnInit(): void {
    this.service.getAddresses().subscribe((response: any) => {
      if (Array.isArray(response)) {
        this.addresses = response;
      } else if (typeof response === 'object' && !Array.isArray(response)) {
        this.addresses = [response];
      } else {
        console.error('Invalid API response:', response);
      }
      this.filterAddresses();
    });
  }

  filterAddresses(): void {
    if (this.searchTerm.trim() !== '') {
      this.filteredAddresses = this.addresses.filter((address: any) => {
        const fieldValue = address[this.searchField]?.toString().toLowerCase();
        return fieldValue.includes(this.searchTerm.toLowerCase());
      });
    } else {
      this.filteredAddresses = this.addresses;
    }
  }
}
