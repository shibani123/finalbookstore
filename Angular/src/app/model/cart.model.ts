import { Injectable } from '@angular/core';
//import { Product } from './product.model';
import { Book } from './book.model';

@Injectable()
export class Cart{
    public lines: CartLine[]=[];
    public itemCount: number = 0;
    public cartPrice: number = 0;
    // public finalstr: String="";
    addLine(book: Book,quantity: number=1){
        let line=this.lines.find(line=>line.book.bookid==book.bookid);
        //console.log(book.bookId);
        if(line!=undefined){
            console.log("undef");
            line.quantity+=quantity;
        }else{
            console.log("def");
            this.lines.push(new CartLine(book,quantity))
        }
        this.recalculate();
    }
    updateQuantity(book: Book,quantity: number){
        let line=this.lines.find(line=>line.book.bookid==book.bookid);
        if(line!=undefined){
            line.quantity=Number(quantity);
        }
        this.recalculate();
    }
    removeLine(id: number){
        let line=this.lines.findIndex(line=>line.book.bookid==id);
        this.lines.splice(line,1);
        this.recalculate();
    }
    clear(){
        this.lines=[];
        this.itemCount = 0;
        this.cartPrice = 0; 
    }

    private recalculate(){
        this.itemCount=0;
        this.cartPrice=0;
        this.lines.forEach(l=>{
            this.itemCount+=l.quantity;
            this.cartPrice+=(l.quantity*l.book.bookprice);
        });
    }
}
export class CartLine{
    public constructor(public book: Book, public quantity: number){}
    get lineTotal(){
        return this.quantity*this.book.bookprice;
    }
}