import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[] = []; // Initialize users as an empty array
  searchTerm: string = '';
  filteredUsers: any[] = [];
  errorMessage:string='No users found';
  
 

  constructor(private service:UsersService) {
    
  }
  ngOnInit(): void {
    this.service.getUsers()
    .subscribe(response => {
      if (Array.isArray(response)) {
        this.users = response; // Assign the array of users to users property
      } else if (typeof response === 'object' && !Array.isArray(response)) {
        this.users = [response]; // Wrap the single user object in an array
      } else {
        console.error('Invalid API response:', response);
      }
    });
  }
  filterUsers() {
    if (this.searchTerm === '') {
      this.filteredUsers = this.users;
    } else {
      this.filteredUsers = this.users.filter(user => user.first_name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }
  }
  
  
  
  
 /* createPost(input: HTMLInputElement) {
    let user = { first_name: input.value };
    this.http.post<any>(this.url, JSON.stringify(user)).subscribe(response => {
      console.log(response);
      // Handle the response here
    });
  }*/
  
  
  
}
