import { createAction } from "@ngrx/store";
import { IBook } from "../../interfaces/book.interface";

const prefix = '[Books]';

export const getBooks = createAction(`${prefix} Get Books`);

export const createBook = createAction(`${prefix} Create Book`, (book: IBook) => book);
