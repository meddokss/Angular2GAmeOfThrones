import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

// components
import {HomeComponent } from "./home/home.component";

// services
import {BooksService} from "./shared/books.service";
import {HttpModule} from "@angular/http";

import {HoussesService} from "./shared/houses.service";
import {AppRoutingModule} from "./app-routing.module";
import {BooksModule} from "./books/books.module";
import {HousesModule} from "./houses/houses.module";
import {CharacterService} from './shared/characters.service';
import {ImgService} from './shared/img.service';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        BooksModule,
        AppRoutingModule,
        HousesModule
    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    providers: [BooksService, HoussesService, ImgService, CharacterService],
    bootstrap: [AppComponent]
})

export class AppModule {}

