import { Component } from '@angular/core';
import { IBook } from 'src/app/interfaces/book.interface';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent {
  book: IBook;
  message: string = '';

  constructor(private bookService: BookService) {
    this.book = { id: 0, name: '' };
  }

  createBook() {
    console.log('creating');
    this.message = 'Creating';
    this.bookService.createBook(this.book);
    this.message = 'Created';
    setTimeout(() => {
      this.message = '';
    }, 2000);
  }
}
