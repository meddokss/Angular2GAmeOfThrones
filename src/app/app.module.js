"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var app_routes_1 = require("./app.routes");
// components
var home_component_1 = require("./home/home.component");
var phrase_details_component_1 = require("./books/book-details/book-details.component.ts");
var books_list_component_1 = require("./books/books-list/books-list.component");
// services
var my_service_1 = require("./shared/books.service.ts");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(app_routes_1.routes),
            ],
            declarations: [app_component_1.AppComponent,
                home_component_1.HomeComponent,
                phrase_details_component_1.BookDetailsComponent,
                books_list_component_1.BookListComponent
            ],
            providers: [my_service_1.PostService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
