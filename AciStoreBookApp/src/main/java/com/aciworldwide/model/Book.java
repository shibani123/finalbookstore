package com.aciworldwide.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "book")
public class Book {

	private long bookid;
	private String booktitle;
	private String bookauthor;
	private String bookprice;
	private int bookquantity;
	
	
	public Book() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Book(long bookid, String booktitle, String bookauthor, String bookprice, int bookquantity) {
		super();
		this.bookid = bookid;
		this.booktitle = booktitle;
		this.bookauthor = bookauthor;
		this.bookprice = bookprice;
		this.bookquantity = bookquantity;
		
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public long getBookid() {
		return bookid;
	}

	public void setBookid(long bookid) {
		this.bookid = bookid;
	}

	public String getBooktitle() {
		return booktitle;
	}

	public void setBooktitle(String booktitle) {
		this.booktitle = booktitle;
	}

	@Column(name="bookauthor", nullable=false)
	public String getBookauthor() {
		return bookauthor;
	}

	public void setBookauthor(String bookauthor) {
		this.bookauthor = bookauthor;
	}

	public String getBookprice() {
		return bookprice;
	}

	public void setBookprice(String bookprice) {
		this.bookprice = bookprice;
	}

	public int getBookquantity() {
		return bookquantity;
	}

	@Override
	public String toString() {
		return "Book [bookid=" + bookid + ", booktitle=" + booktitle + ", bookauthor=" + bookauthor + ", bookprice="
				+ bookprice + ", bookquantity=" + bookquantity + "]";
	}

	public void setBookquantity(int bookquantity) {
		this.bookquantity = bookquantity;
	}
	
	
	
	
	
}
