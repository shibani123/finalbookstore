import { Injectable } from "@angular/core";

import { Observable } from 'rxjs';
import { Customer } from './customer.model';
import { StaticBookDataSource } from './static.bookdatasource';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class CustomerRepository{
    
    private customers : Customer[] = [];

    constructor(private staticdatasource : StaticBookDataSource,private restdatasource:RestDataSource){ 
        staticdatasource.getCustomers().subscribe(p=>{
            this.customers=p;
        });
        console.log(this.customers);

    }

    getCustomers(author:string=null){
        return this.customers.filter(p=>author==null);
    }

    saveCustomer(customer : Customer): Observable<Customer>{
        return this.restdatasource.saveCustomer(customer);
    }

    getByCustomerUsername(username : String) : Customer{
        return this.customers.find(u=>u.username==username);
    }
}