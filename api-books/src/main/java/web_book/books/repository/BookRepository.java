package web_book.books.repository;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import web_book.books.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    List<Book> findByGenre(String genre);

    @Query("SELECT b FROM Book b WHERE EXTRACT(YEAR FROM b.publicationDate) = :year ORDER BY b.publicationDate DESC")
    List<Book> findBooksByPublicationYear(@Param("year") int year, Pageable pageable);
}
