import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book.model';
import { Customer } from './customer.model';
import { Promotion } from './promotion.model';
import { Order } from './order.model';


const  PROTOCOL = "http";
const PORT = 9900;


@Injectable()
export class RestDataSource{

    baseUrl: string;

    constructor(private http: HttpClient){
        //this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
        this.baseUrl = `${PROTOCOL}://10.61.182.160:${PORT}/`;
    }

    getBooks() : Observable<Book[]>{
        return this.http.get<Book[]>(this.baseUrl + "api/books/all");
    }

    saveCustomer(customer : Customer) :Observable<Customer>{
        
        return this.http.post<Customer>(this.baseUrl + "api/customers/save", customer);
    }
    
    getByCustomerUsername(username : String) : Observable<Customer>{
        return this.http.get<Customer>(this.baseUrl + "api/customers/byusername");
    }

    getCustomers() : Observable<Customer[]>{
        return this.http.get<Customer[]>(this.baseUrl + "api/customers/a");
    }

    saveBooks(book : Book) : Observable<Book>{
        return this.http.post<Book>(this.baseUrl + "api/books/save", book);
    }

    savePromotion(promo : Promotion): Observable<Promotion>{
        
        return this.http.post<Promotion>(this.baseUrl + "api/promotions/insert", promo);
    }

    editBooks(book : Book): Observable<Book>{
        return this.http.put<Book>(this.baseUrl + "api/books/update",book);
    }
    getpromo():Observable<Promotion[]>{
        return this.http.get<Promotion[]>(this.baseUrl + "api/promotions/all");
    }

    saveOrder(order : Order) : Observable<Order>{
        return this.http.post<Order>(this.baseUrl + "api/orders/save", order);
    }

    decrementQuantity(book:Book): Observable<Book>{
        console.log("Hi from rest");
        return this.http.put<Book>(this.baseUrl + "api/books/quantity/u",book);
    }
}