package com.aciworldwide.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aciworldwide.model.Book;
import com.aciworldwide.model.Customer;
import com.aciworldwide.repositories.BookRepository;

@Service
public class BookService {
	
	@Autowired
	private BookRepository bookRepository;
	
	public List<Book> getBooks(){
//		return bookRepository.findAll();
		return bookRepository.findBookByOrder();
	}
	
	public Book insertBook(Book book) {
		return bookRepository.saveAndFlush(book);
	}
	
	public Book updateBook(Book book) {
		return bookRepository.saveAndFlush(book);
	}
	
	public void deleteBook(long id) {
		bookRepository.deleteById(id);
	}
	
	public Book saveBooks(Book book) {
		return bookRepository.saveAndFlush(book);
	}
	
	public void updateByQuantity(long bookid, int bookquantity) {
		 bookRepository.decrementQuantity(bookid, bookquantity);
	}

}
