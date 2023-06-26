import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BanksComponent } from './banks.component';

import { AddressesRoutingModule } from './banks-routing.module';

@NgModule({
  declarations: [BanksComponent],
  imports: [
    CommonModule,
    FormsModule,
    AddressesRoutingModule
  ]
})
export class BanksModule { }
