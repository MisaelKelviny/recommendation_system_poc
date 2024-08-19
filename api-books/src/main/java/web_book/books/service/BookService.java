package web_book.books.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import web_book.books.entity.Book;
import web_book.books.repository.BookRepository;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;

    public Book findById(Long id){
        Optional<Book> result = bookRepository.findById(id);
        return result.orElse(null);
    }

    public List<Book> findByGenre(String genre) {
        return bookRepository.findByGenre(genre);
    }

    public List<Book> getBooksByPublicationYear(int year, int limit) {
        return bookRepository.findBooksByPublicationYear(year, PageRequest.of(0, limit));
    }

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }
}
