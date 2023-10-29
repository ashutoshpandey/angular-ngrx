import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { BookReducer } from './ngrx/reducers/book.reducer';

import { AppComponent } from './app.component';
import { BookListComponent } from './components/books/book-list/book-list.component';
import { BookCreateComponent } from './components/books/book-create/book-create.component';
import { BookEditComponent } from './components/books/book-edit/book-edit.component';

const reducers = {
  books: BookReducer
};

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookCreateComponent,
    BookEditComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    EffectsModule.forRoot(),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
