import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookRepository } from 'src/app/model/book.repository';
import { Cart } from 'src/app/model/cart.model';
import { Book } from 'src/app/model/book.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser: string;

  constructor(public router: Router,private repository: BookRepository,private cart: Cart) {
    this.currentUser = sessionStorage.getItem("name")
  }

  get Books() : Book[]{
    return this.repository.getBooks();
  }
  Go(){
    this.router.navigate(["/login"])
  }

  public selectedCategory= null;

  public productsPerPage=3;
  public selectedPage=1;
  get products(): Book[]{
      let pageIndex=(this.selectedPage-1)*this.productsPerPage;
      return this.repository.getBooks().slice(pageIndex,pageIndex+this.productsPerPage);
  }
  changePage(newPage: number){
      this.selectedPage=newPage;
  }
  changePageSize(newSize: Number){
      this.productsPerPage=Number(newSize);
      this.selectedPage=1;
  }
  get PageNumbers():number[]{
      return Array(Math.ceil(this.repository.getBooks().length/this.productsPerPage)).fill(0).map((x,i)=>i+1);
  }

  addProductToCart(book: Book){
      this.cart.addLine(book);
  }

  ngOnInit() {
    //console.log(sessionStorage.getItem("name"));
  }

}
