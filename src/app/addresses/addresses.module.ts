import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {AddressesComponent} from './addresses.component';
import { AddressesRoutingModule } from './addresses-routing.module';


@NgModule({
  declarations: [AddressesComponent],
  imports: [
    CommonModule,
    FormsModule,
    AddressesRoutingModule
  ]
})
export class AddressesModule { }
