import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http'
import { Observable } from 'rxjs';
import{CustomerResponse} from '../models/customer';
import { Customer } from '../models/customer';
import{ApiUrl} from '../models/ApiUrl'; 

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  private baseURL = ApiUrl.Baseurl;
  private GetCustomerURL = ApiUrl.GetCustomer;
  private SaveCustomerURL = ApiUrl.SaveCustomer;
  private UpdateCustomerURL = ApiUrl.UpdateCustomer;
  private DeleteCustomerURL = ApiUrl.DeleteCustomer;
  constructor(private httpClient: HttpClient) { }

  getCustomerList(): Observable<CustomerResponse>{
    return this.httpClient.get<CustomerResponse>(`${this.baseURL+this.GetCustomerURL}`);
  }
  getCustomerById(CustomerId:number): Observable<CustomerResponse>{
    return this.httpClient.get<CustomerResponse>(`${this.baseURL+this.GetCustomerURL+'/'+CustomerId}`);
  }
  
  addCustomer(body: Customer): Observable<CustomerResponse> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.httpClient.post<CustomerResponse>(this.baseURL + this.SaveCustomerURL, body, httpOptions);
  }

  updateCustomer(body: Customer): Observable<CustomerResponse> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.httpClient.put<CustomerResponse>(this.baseURL + this.UpdateCustomerURL, body, httpOptions);
  }

  deleteCustomer(CustomerId: number): Observable<CustomerResponse> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.httpClient.delete<CustomerResponse>(this.baseURL + this.DeleteCustomerURL +'/'+ CustomerId, httpOptions);
  }
}
