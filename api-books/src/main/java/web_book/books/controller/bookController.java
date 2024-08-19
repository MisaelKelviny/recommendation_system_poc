package web_book.books.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import web_book.books.entity.Book;
import web_book.books.service.BookService;

import java.util.List;

@RestController
@RequestMapping("/api/books")
@Tag(name = "Books", description = "the book API")
@CrossOrigin(value = "*", origins = "*")
public class bookController {

    @Autowired
    private BookService bookService;

    @GetMapping
    @Operation(summary = "Find all books")
    public List<Book> findAll(@RequestParam(value = "year", required = false) Integer year,
                              @RequestParam(value = "limit", defaultValue = "10") int limit)
    {
        if (year == null) {
            return bookService.getAllBooks();
        } else {
            return bookService.getBooksByPublicationYear(year, limit);
        }
    }

    @GetMapping("/{id}")
    @Operation(summary = "Find book by id")
    public Book findById(@PathVariable Long id) {
        return bookService.findById(id);
    }

    @GetMapping("/genre/{genre}")
    @Operation(summary = "Find book by genre")
    public ResponseEntity<List<Book>> findByGenre(@PathVariable String genre) {
        List<Book> books = bookService.findByGenre(genre);
        if (books.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(books);
    }
}
