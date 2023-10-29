import { IBookState } from "../states/book.model";
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectBookState = createFeatureSelector<IBookState>('book');

export const getBooks = createSelector(
    selectBookState,
    (state: IBookState) => state.books
);