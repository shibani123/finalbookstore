package com.aciworldwide.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.aciworldwide.model.Book;


@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

	@Modifying
	@Transactional
	@Query("update Book b set b.bookquantity =?2 where b.bookid =?1")
	void decrementQuantity(long bookid, int bookquantity);
	
	@Query("select b from Book b order by b.booktitle")
	List<Book> findBookByOrder();
}
