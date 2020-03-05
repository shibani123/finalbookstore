import { Injectable } from "@angular/core";
import { Order } from './order.model';

import { Observable } from 'rxjs';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class OrderRepository{
    private order: Order[]=[];
    constructor(private datasource: RestDataSource){}
    
    saveOrder(order: Order):Observable<Order>{
        return this.datasource.saveOrder(order);
    }
}