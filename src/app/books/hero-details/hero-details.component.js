"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var BookDetailsComponent = (function () {
    function BookDetailsComponent(router, activatedRoute, postService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.postService = postService;
    }
    BookDetailsComponent.prototype.ngOnInit = function () {
        // this.activatedRoute.params.forEach((params: Params) => {
        //     let id = +params["name"];
        //     this.service
        //         .getBook(id)
        //         .then(result => this.book = result);
        // });
        var _this = this;
        this.postService.getPosts().subscribe(function (books) {
            _this.books = books;
        });
    };
    BookDetailsComponent.prototype.goToPhrasesList = function () {
        this.router.navigate(["home"]);
    };
    BookDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "book-details",
            templateUrl: "hero-details.component.html"
        })
    ], BookDetailsComponent);
    return BookDetailsComponent;
}());
exports.BookDetailsComponent = BookDetailsComponent;
