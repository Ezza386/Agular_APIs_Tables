import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Users } from '../Users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Users[] = []; // Initialize users as an empty array
  searchTerm: string = '';
  filteredUsers: Users[] = [];
  errorMessage: string = 'No users found';
  sortDirection: string = 'asc'; // Default sort direction
  sortField: string = 'first_name'; // Default sort field

  constructor(private service: UsersService) {}

  ngOnInit(): void {
    this.service.getUsers().subscribe(response => {
      if (Array.isArray(response)) {
        this.users = response; // Assign the array of users to users property
        this.filteredUsers = response;
      } else if (typeof response === 'object' && !Array.isArray(response)) {
        this.users = [response]; // Wrap the single user object in an array
        this.filteredUsers = [response];
      } else {
        console.error('Invalid API response:', response);
      }
      this.sortUsers();
    });
  }

  filterUsers(): void {
    if (this.searchTerm.trim() !== '') {
      this.filteredUsers = this.users.filter(user => {
        const fieldValue = user.first_name.toLowerCase();
        return fieldValue.includes(this.searchTerm.toLowerCase());
      });
    } else {
      this.filteredUsers = this.users;
    }
    this.sortUsers();
  }

  sortUsers(): void {
    this.filteredUsers.sort((a, b) => {
      const valueA = this.getFieldValue(a);
      const valueB = this.getFieldValue(b);

      if (this.sortDirection === 'asc') {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    });
  }

  toggleSortDirection(): void {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.sortUsers();
  }

  changeSortField(field: string): void {
    this.sortField = field;
    this.sortUsers();
  }

  getFieldValue(user: Users): string {
 
    switch (this.sortField) {
      case 'first_name':
        return user.first_name.toLowerCase();
      case 'last_name':
        return user.last_name.toLowerCase();
      case 'email':
        return user.email.toLowerCase();
   //other fields can be added
      default:
        return '';
    }
  }
}
