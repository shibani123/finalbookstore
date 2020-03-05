package com.aciworldwide.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aciworldwide.model.Book;
import com.aciworldwide.model.Customer;
import com.aciworldwide.services.BookService;

@RestController
@RequestMapping("/api/books")
@CrossOrigin(origins="http://localhost:4200")
public class BookController {

	@Autowired
	private BookService bookService;
	
	@GetMapping("/all")
	public List<Book> getBooks(){
		return bookService.getBooks();
	}
	
	@PostMapping("/insert")
	public Book insertBook(@RequestBody Book book) {
		return bookService.insertBook(book);
	}
	
	@PutMapping("/update")
	public Book updateBook( @RequestBody Book book) {
		return bookService.updateBook(book);
	}
	
	@DeleteMapping("/delete")
	public void deleteBooking(long id) {
		bookService.deleteBook(id);
	}
	
	@PostMapping("/save")
	public Book saveBooks(@RequestBody Book book) {
		
		return bookService.saveBooks(book);
	}
	
	@PutMapping("/quantity/u")
	public void decrementByQuantity(@RequestBody Book book) {
		System.out.println(book.toString());
		bookService.saveBooks(book);
		//bookService.updateByQuantity(bookid, bookquantity);
	}
}
