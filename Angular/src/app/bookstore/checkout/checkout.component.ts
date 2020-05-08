import { Component, OnInit } from '@angular/core';
import { OrderRepository } from 'src/app/model/order.repository';
import { Order } from 'src/app/model/order.model';
import { Cart } from 'src/app/model/cart.model';
import { NgForm } from '@angular/forms';
import { BookRepository } from 'src/app/model/book.repository';
import { Book } from 'src/app/model/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  stoporder:number = 5;
  reorder:number = 0;
  b:number=null;
  c:number=null;
  d:number=null;
  e:number=null;
  constructor(public repo: OrderRepository,public order: Order,public cart: Cart,public rot :Router,public bookrepo:BookRepository, public books: Book) { }
  orderSent: boolean=false;

  submitted: boolean=false;
  ngOnInit() {
  }
  submitOrder(form: NgForm){
    this.submitted=true;
    if(form.valid){
      this.repo.saveOrder(this.order).subscribe(order=>{
        this.order.clear();
        this.submitted=false;
        this.orderSent=true;
        this.order.shipped=true;
        //console.log(this.orderSent+"---------------");
      });
      this.cart.lines.forEach(p=>{
        this.books = this.bookrepo.getBookById(p.book.bookid);
        //console.log(this.book);
        this.books.bookquantity -= p.quantity;
        //console.log(this.book.bookquantity);
        this.bookrepo.decrementQuantity(this.books).subscribe();
      });
      this.checkStopOrder();
      this.orderSent=true;
      this.rot.navigate(["/checkout"]);
    }
    
}

checkStopOrder(){
    
  this.cart.lines.forEach(f => {
      this.d=f.book.bookid;
      this.e=f.quantity;
      this.books=this.bookrepo.getBookById(this.d);
      /*if(this.e < this.books.bookquantity){
        this.bookrepo.decrementQuantity(this.books).subscribe();
      }*/
       if(this.books.bookquantity<=this.reorder){
        this.books.bookquantity += this.stoporder;
        this.bookrepo.decrementQuantity(this.books).subscribe();
      }

  });
}
}
