
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Book } from './book.model';
import { Order } from './order.model';
import { Promotion } from './promotion.model';
import { Customer } from './customer.model';

@Injectable()//decorator(s)--Similar to annotation s in java. Used to provide
//instructions to or information or metadata to angular framework...EG--@injectable() used to instruct 
// angular that underlying class will be used in DI.
//@NgModule is used to informs that the underlying class will work as a module.
//if in application structure diagram, connecting arrow that is coming into the box2 from box1....means box2 will use box1
//if in application structure diagram, connecting arrow that is touching the box2 from box1....means box2 will be dependency for box1
export class StaticBookDataSource{
    saveOrder(order: Order): Observable<Order> {
        return;
    }
    books : Book[]=[];
    //promos : Promotion[] = [];
    customer: Customer[] =[];

    promotions: Promotion[]=[];
    /*private books : Book[] = [
        new Book(1,'E','P',100,1),
        new Book(2,'D','Q',200,2),
        new Book(3,'C','R',300,3),
        new Book(4,'B','S',400,4),
        new Book(5,'A','T',500,5),
    ];*/

    getBooks() : Observable<Book[]>{
        this.books.forEach(ele => {

        });
        return from([this.books]);
    }

    saveBooks(book : Book) : Observable<Book>{
        return from([book]);
    }
    saveCustomer(customer : Customer) : Observable<Customer> {
        console.log(JSON.stringify(customer));
        return from([customer]);
    }
    getCustomers() : Observable<Customer[]>{
        
        return from([this.customer]);
    }
    getpromo():Observable<Promotion[]>{
        return from([this.promotions]);
    }
    savePromotion(promo : Promotion): Observable<Promotion>{
        
        return from([promo]);
    }

    editBooks(book : Book): Observable<Book>{
        return from([book]);
    }

    saveOrders(order : Order) : Observable<Order>{
        return from([order]);
    }
    
}