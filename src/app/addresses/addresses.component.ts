import { Component, OnInit, ViewChild } from '@angular/core';
import { AddressesService } from '../addresses.service';
import { Addresses } from '../Addresses';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit {
  addresses: Addresses[] = [];
  filteredAddresses: Addresses[] = [];
  searchTerm: string = '';
  searchField: string = 'building_number';
  @ViewChild(MatSort)
  sort!: MatSort;
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
      this.filteredAddresses = this.addresses.filter((address) => {
        const fieldValue = address[this.searchField]?.toString().toLowerCase();
        return fieldValue.includes(this.searchTerm.toLowerCase());
      });
    } else {
      this.filteredAddresses = this.addresses;
    }
  }

}
