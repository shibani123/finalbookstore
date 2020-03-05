import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/cart.model';
import { PromotionRepository } from '../model/promotion.repository';
import { Router } from '@angular/router';
import { Book } from '../model/book.model';
import { BookRepository } from '../model/book.repository';
import { Promotion } from '../model/promotion.model';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent implements OnInit {
  promocode:string=null;
  boolla:boolean=false;
  totalprice:number;
  discount:number=0;
  msgg:string="";
  msggg:number;
  msggga:string="";
  msgggg:number;
  diff:number=0;
  newprice:number;
  constructor(public cart:Cart,public repo:PromotionRepository,public router:Router,public book:Book,public bookrepo:BookRepository) { this.totalprice=this.cart.cartPrice;}
  
  checkPromo(){
    if(this.repo.getPromotion(this.promocode)!=null||this.repo.getPromotion(this.promocode)!=undefined){
      this.discount=parseInt(this.repo.getPromotion(this.promocode).discount);
      this.newprice=this.cart.cartPrice*((100-this.discount)/100);
      this.diff=Math.round(this.cart.cartPrice-this.newprice);
      this.msggg=this.newprice;
      this.msggga=" and not in "
      this.msgggg=this.cart.cartPrice;

      this.msgg="You saved Rs. "+this.diff+"  !!  Buy this in ";
      this.cart.cartPrice=this.newprice;
      this.boolla=true;
      this.varbool=true;
    }
    else{
      alert("Enter a valid Promotion code!");
    }
    //if code present in promocode checkcode()
    //fetch dicount % x
    //totalprice=totalprice*(x/100);
    //this.cart.cartPrice=totalprice;
  }
  checkActor(){
    if(sessionStorage.getItem("actor")==="member"){
      return true;
    }
    return false;
  } 
  varbool:boolean=false;
  get Promotions(): Promotion[]{
    return this.repo.getallPromotion();
  }
  flag:boolean=true;
  checkit(){
    this.cart.lines.forEach(e => {
      this.book = this.bookrepo.getBookById(e.book.bookid);
      if(this.book.bookquantity<e.quantity){
        this.flag=false;
        alert("Ordered Quantity is Unavailable for-->"+this.book.booktitle);
      }
    });
    if(this.flag==true){
      this.router.navigate(["/checkout"]);
    }
    
  }
ngOnInit() {
    console.log(sessionStorage.getItem("actor"));
    console.log(this.cart);
  }

}
