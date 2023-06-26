import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { UsersComponent } from './users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from './users.service';
//import { AddressesComponent } from './addresses/addresses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BanksComponent } from './banks/banks.component';
import {MatSortModule} from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { SignupModule } from './signup/signup.module';
@NgModule({
  declarations: [
    AppComponent,
   // UsersComponent,
    //AddressesComponent,
    DashboardComponent,
    BanksComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSortModule,
    MatTableModule,
    ReactiveFormsModule,
    SignupModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
