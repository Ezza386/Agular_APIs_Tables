import { Component, OnInit } from '@angular/core';
import { AddressesService } from '../addresses.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit{
addresses:any[]=[];
searchTerm: string = '';
filteredAddresses: any[] = [];
ngOnInit(): void {
  this.service.getAddresses()
  .subscribe(response => {
    if (Array.isArray(response)) {
      this.addresses = response; // Assign the array of users to users property
    } else if (typeof response === 'object' && !Array.isArray(response)) {
      this.addresses = [response]; // Wrap the single user object in an array
    } else {
      console.error('Invalid API response:', response);
    }
  });
}
constructor(private service:AddressesService){

}
filterUsers() {
  if (this.searchTerm === '') {
    this.filteredAddresses = this.addresses;
  } else {
    this.filteredAddresses = this.addresses.filter(address => address.first_name.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
}
}
