import { Component, OnInit, ViewChild } from '@angular/core';

import { UsersService } from '../users.service';
import { Users } from '../Users';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Users[] = []; // Initialize users as an empty array
  searchTerm: string = '';
  filteredUsers: Users[] = [];
  errorMessage:string='No users found';
  
 @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private service:UsersService) {
    
  }
  ngOnInit(): void {
    this.service.getUsers()
    .subscribe(response => {
      if (Array.isArray(response)) {
        this.users = response; // Assign the array of users to users property
        this.filteredUsers = response;
      } else if (typeof response === 'object' && !Array.isArray(response)) {
        this.users = [response]; // Wrap the single user object in an array
        this.filteredUsers = [response];
      } else {
        console.error('Invalid API response:', response);
      }
      if (this.sort) {
        this.sortUsers();
      }
    });
  }
  filterUsers(): void {
    if (this.searchTerm.trim() !== '') {
      this.filteredUsers = this.users.filter((user) => {
        const fieldValue = user.first_name.toLowerCase();
        return fieldValue.includes(this.searchTerm.toLowerCase());
      });
    } else {
      this.filteredUsers = this.users;
    }

  }
  
  sortUsers(): void {
    this.filteredUsers.sort((a, b) => {
      // Compare the first_name property of `a` and `b` for sorting
      const nameA = a.first_name.toLowerCase();
      const nameB = b.first_name.toLowerCase();
  
      if (nameA < nameB) {
        return -1; // `a` should come before `b`
      } else if (nameA > nameB) {
        return 1; // `b` should come before `a`
      } else {
        return 0; // No change in order
      }
    });
  }
 /* createPost(input: HTMLInputElement) {
    let user = { first_name: input.value };
    this.http.post<any>(this.url, JSON.stringify(user)).subscribe(response => {
      console.log(response);
      // Handle the response here
    });
  }*/
  
  
  
}
