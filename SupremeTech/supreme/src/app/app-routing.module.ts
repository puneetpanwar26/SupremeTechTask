import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerlistComponent } from './Customer/customerlist/customerlist.component';
import { AddCustomerComponent } from './Customer/add-customer/add-customer.component';
const routes: Routes = [ 
  { path: '', component: CustomerlistComponent },
{ path: '', component: CustomerlistComponent },
{ path: 'customerlist', component: CustomerlistComponent },
{ path: 'addCustomer', component: AddCustomerComponent },
{ path: 'editCustomer/:id', component: AddCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
