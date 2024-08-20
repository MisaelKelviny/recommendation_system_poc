package web_book.books.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import web_book.books.entity.Book;
import web_book.books.repository.BookRepository;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;

    public List<Book> findAll(Pageable pageable){
        return bookRepository.findAll(pageable).getContent();
    }

    public Book findById(Long id){
        Optional<Book> result = bookRepository.findById(id);
        return result.orElse(null);
    }

    public List<Book> findByFilters(Integer year, String genre, String search, Pageable pageable) {
        return bookRepository.findBooksByFilters(year, genre, search, pageable);
    }
}
