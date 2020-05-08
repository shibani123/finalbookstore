import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';
import { PromotionRepository } from 'src/app/model/promotion.repository';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/book.model';
import { BookRepository } from 'src/app/model/book.repository';
import { Promotion } from 'src/app/model/promotion.model';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent implements OnInit {
  promocode:string=null;
  varbool:boolean=false
  boolla:boolean=false;
  totalprice:number;
  discount:number=0;
  msgg:string="";
  msggg:number;
  msggga:string="";
  msgggg:number;
  diff:number=0;
  newprice:number;
  mrp:number;
  //public newcode:string = null;
  //sahidala:boolean=false;
  galat:boolean=false;
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
      this.galat=false;
    }
    else{
      this.varbool=false;
      this.galat=true;
      
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
  modifyPromo(){
    console.log("l:");
    this.cart.cartPrice=this.mrp;
    this.promocode=null;
    this.boolla=false;
    this.varbool=false;
    this.galat=false;
  }
  
  get Promotions(): Promotion[]{
    return this.repo.getallPromotion();
  }
  checkQuantityinCart():boolean{
    if(this.cart.lines.length>=1){
      return true;
    }
    return false;
  }
  flag:boolean=true;
  fixq:number;
  checkit(){
    this.cart.lines.forEach(e => {
      this.book = this.bookrepo.getBookById(e.book.bookid);
      if(this.book.bookquantity<e.quantity){
        this.flag=false;
        alert("Ordered Quantity is Unavailable for-->"+this.book.booktitle );
        this.fixq=this.book.bookquantity;
      }
    });
    if(this.flag==true){
      this.router.navigate(["/checkout"]);
    }
    
  }
  /*changePromocode(newpromocode: string){
    this.newcode=newpromocode;

  }*/

  
ngOnInit() {
    console.log(sessionStorage.getItem("actor"));
    console.log(this.cart);
    this.mrp=this.cart.cartPrice;
  }

}