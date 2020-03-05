import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { StaticBookDataSource } from './static.bookdatasource';
import { Observable } from 'rxjs';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class BookRepository{
    private books : Book[] = [];
    
    constructor(private staticdatasource : StaticBookDataSource,private restdatasource: RestDataSource){
        staticdatasource.getBooks().subscribe(data => 
            {
                this.books = data;
            });
            //this.books.sort((a,b)=> a.booktitle.localeCompare(b.booktitle));
    }

    getBooks() : Book[] {
        return this.books;
    }
    getBookById(id:number):Book{
        return this.books.find(b=>b.bookid==id);
    }

    saveBooks(book : Book) : Observable<Book>{
        return this.staticdatasource.saveBooks(book);
    }

    editBooks(book : Book) : Observable<Book>{
        return this.staticdatasource.editBooks(book);
    }
    
    decrementQuantity(book: Book){
        console.log("Hi from repo");
        return this.restdatasource.decrementQuantity(book);
    }
}