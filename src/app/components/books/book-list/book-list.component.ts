import { Component, OnInit } from '@angular/core';

import { IBook } from 'src/app/interfaces/book.interface';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: IBook[] = [];
  isLoading: boolean = false;

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getBooks().subscribe((books: IBook[]) => {
      this.books = books;
    });
  }

  removeBook(book: IBook) {
  }
}
