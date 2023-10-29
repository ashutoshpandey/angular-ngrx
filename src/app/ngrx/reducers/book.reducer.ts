import { Action, createReducer, on } from "@ngrx/store";

import { IBookState } from "../states/book.model";
import * as bookActions from '../actions/book.action';
import { IBook } from "src/app/interfaces/book.interface";

export const initialBookState: IBookState = {
    books: [],
    isLoading: false
};

const reducer = createReducer<IBookState>(
    initialBookState,
    on(bookActions.getBooks, (state: IBookState) => {
        return {
            ...state,
            books: [...state.books]
        };
    }),
    on(bookActions.createBook, (state: IBookState, book: IBook) => {
        return {
            ...state,
            books: [...state.books, book]
        };
    })
);

export function BookReducer(
    state: IBookState = initialBookState, actions: Action
) {
    return reducer(state, actions);
}