import { map, switchMap } from "rxjs";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { IBook } from "src/app/interfaces/book.interface";
import { BookService } from "src/app/services/book.service";
import { getBooks, getBooksSuccess } from "../actions/book.action";

@Injectable()
export class BookEffect {
    constructor(
        private readonly actions$: Actions,
        private readonly bookService: BookService
    ) { }

    // getBooks$ = createEffect(() => {
    //     this.actions$.pipe(
    //         ofType(getBooks.type),
    //         switchMap(() => this.bookService.getBooks()),
    //         map((books: IBook[]) => getBooksSuccess({ books }))
    //     )
    // });
}