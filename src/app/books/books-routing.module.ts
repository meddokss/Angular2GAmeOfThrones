
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {BookListComponent} from "./books-list/books-list.component";
import {BookDetailsComponent} from "./book-details/book-details.component";
import {HeroDetailsComponent} from './hero-details/hero-details.component';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: "books",
      component: BookListComponent
    },
    {
      path: "books/:id",
      component: BookDetailsComponent
    },
    {
      path: "char/:id",
      component: HeroDetailsComponent
    }
    ]),
  ],
  exports: [RouterModule]
})
export class BooksRoutingModule {}
