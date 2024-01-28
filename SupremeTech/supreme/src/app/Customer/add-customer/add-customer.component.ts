import { Component } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomerResponse } from '../../models/customer';
import { CustomerService } from '../../services/customer-service.service';
import { Router,ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {

  customerResponse: CustomerResponse = new CustomerResponse;
  customer: Customer = new Customer; 
  title:string="Add Customer";
  customerId:number=0;
  constructor(private customerService: CustomerService,
    private router: Router,private activeRoute:ActivatedRoute) {

      this.customerId = this.activeRoute.snapshot.params["id"];
      if(this.customerId>0)
      {
        this.title="Edit Customer";
        this.GetCustomerById(this.customerId);
      }
      else{
        this.title="Add Customer";
      }
     }

      GetCustomerById(customerId:number) {
      this.customerService.getCustomerById(this.customerId).subscribe(data => {
        this.customerResponse = data;
        console.log(this.customerResponse);
       this.customer=this.customerResponse.data[0];
        });
     };
    saveCustomer=() =>
    {
       if(this.customerId>0)
       {
        this.updateCustomer();
       }
       else
       {
          this.saveCust();
       }

    }
saveCust(){
  console.log( this.customer);
  this.customerService.addCustomer(this.customer).subscribe(data => {
  this.customerResponse = data;
  console.log(this.customerResponse);
  if(this.customerResponse.success==true){

    this.router.navigate(['/customerlist']);
  }
  });
}
    cancel=()=>{
      this.router.navigate(['/customerlist']);
    }
    updateCustomer(){
      console.log("UpdateCustomerApi Call.......");
      console.log(this.customer);
      const data=this.customer;
        this.customerService.updateCustomer(data).subscribe(data => {
        this.customerResponse = data;
        console.log(this.customerResponse);
        if(this.customerResponse.success==true){

          this.router.navigate(['/customerlist']);
        }
        });
    };
 
}
