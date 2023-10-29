import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './components/books/book-list/book-list.component';
import { BookCreateComponent } from './components/books/book-create/book-create.component';

const routes: Routes = [{
  path: 'book/list', component: BookListComponent,
}, {
  path: 'book/create', component: BookCreateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
