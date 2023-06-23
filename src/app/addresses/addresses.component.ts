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
  sortDirection: string = 'asc'; // Default sort direction
  sortField: string = 'city'; // Default sort field
  @ViewChild(MatSort)
  sort!: MatSort;
  constructor(private service: AddressesService) {}
  size!:number;
  ngOnInit(): void {
    this.fetchAddress();
  }
  fetchAddress():void{
    this.service.getAddresses(this.size).subscribe((response: any) => {
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
  sortAddresses(): void {
    this.filteredAddresses.sort((a, b) => {
      const valueA = this.getFieldValue(a);
      const valueB = this.getFieldValue(b);
  
      if (this.sortField === 'building_number') {
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
    this.sortAddresses();
  }

  changeSortField(field: string): void {
    this.sortField = field;
    this.sortAddresses();
  }

  getFieldValue(address: Addresses):any {

 
    switch (this.sortField) {
      case 'city':
        return address.city.toLowerCase();
      case 'street_name':
        return address.street_name.toLowerCase();
      case 'building_number':
        return address.building_number;
   //other fields can be added
      default:
        return '';
    }
  }
}
