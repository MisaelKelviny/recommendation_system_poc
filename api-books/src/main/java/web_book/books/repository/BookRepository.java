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

    @Query("SELECT b FROM Book b WHERE " +
            "(:year IS NULL OR (EXTRACT(YEAR FROM b.publicationDate) = :year)) AND " +
            "(:genre IS NULL OR b.genre = :genre) AND " +
            "(LOWER(title) ILIKE LOWER(CONCAT('%', :search, '%')) OR LOWER(author) ILIKE LOWER(CONCAT('%', :search, '%')) OR :search IS NULL) " +
            "ORDER BY b.publicationDate DESC")
    List<Book> findBooksByFilters(@Param("year") Integer year,
                                  @Param("genre") String genre,
                                  @Param("search") String search,
                                  Pageable pageable);
}
