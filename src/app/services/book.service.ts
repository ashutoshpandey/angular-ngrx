import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";

import { IBook } from "../interfaces/book.interface";
import { IBookState } from "../ngrx/states/book.model";

import { getBooks } from "../ngrx/selectors/book.selector";
import { createBook } from "../ngrx/actions/book.action";

@Injectable({
    providedIn: 'root'
})
export class BookService {
    constructor(private store: Store<IBookState>) {
    }

    getBooks(): Observable<IBook[]> {
        return this.store.pipe(select(getBooks));
    }

    createBook(book: IBook) {
        let result: any = this.store.dispatch(createBook(book));
        console.log(result);
    }
}