import { NgModule } from "@angular/core";
import {CommonModule} from "@angular/common";
import {BooksRoutingModule} from "./books-routing.module";
import {BookDetailsComponent} from "./book-details/book-details.component";
import {BookListComponent} from "./books-list/books-list.component";
import {HeroDetailsComponent} from './hero-details/hero-details.component';



@NgModule({
    imports: [
        BooksRoutingModule,
        CommonModule
    ],
    declarations: [
        BookDetailsComponent,
        BookListComponent,
        HeroDetailsComponent
    ]
})
export class BooksModule {}

