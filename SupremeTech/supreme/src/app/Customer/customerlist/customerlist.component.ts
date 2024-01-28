import { Component,NgModule } from '@angular/core';
import { NgFor } from '@angular/common';
import { Customer } from '../../models/customer';
import { CustomerResponse } from '../../models/customer';
import { CustomerService } from '../../services/customer-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customerlist',
  standalone: true,
  imports: [NgFor],
  templateUrl: './customerlist.component.html',
  styleUrl: './customerlist.component.css'
})
export class CustomerlistComponent {
  customerResponse: CustomerResponse = new CustomerResponse;
  constructor(private customerService: CustomerService,
    private router: Router) { }

    ngOnInit(): void {
      this.getCustomers();
    }

    private getCustomers(){
      this.customerService.getCustomerList().subscribe(data => {
        this.customerResponse = data;
        console.log(this.customerResponse);
      });
    };
    private deleteCustomer(customerId:number){
      this.customerService.deleteCustomer(customerId).subscribe(data => {
        this.customerResponse = data;
        console.log(this.customerResponse);
        if(this.customerResponse.success==true){
          this.getCustomers();
        }
      });
    }
    deleteMethodAlert(name: string,customerId:number) {
      if(confirm("Are you sure to delete:- "+name+"\n And Customer Id:="+customerId+"")) {

        this.deleteCustomer(customerId);
      }
    }
}
