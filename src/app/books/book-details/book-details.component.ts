import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Bookses, BooksService} from '../../shared/books.service';
import {CharacterService, Characters} from '../../shared/characters.service';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
// import {Char} from '../hero-details/hero-details.component';

@Component({
    moduleId: module.id,
    selector: 'book-details',
    templateUrl: 'book-details.component.html',
    styleUrls: ['book-details.component.css']
})

export class BookDetailsComponent implements OnInit {
    book: Bookses;
    characters: any=[];
    imgs: any;
   

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private booksService: BooksService,
        private characterService: CharacterService,
        private http: Http
    ) {}

    ngOnInit() {
      this.activatedRoute.params.subscribe((params: any) => {
        this.booksService.getBookiD(params.id).subscribe(book => {
          this.book = book;
          if(this.book.povCharacters.length === 0){
            let maxCharNumbers = 10;
            for (let count=0; count < maxCharNumbers; count++) {
              this.characters.push([{view: false}]);
            }
          }
          
          Observable.forkJoin(
            this.book.povCharacters.map(char => this.http.get(char)))
            .subscribe((data: any) => {
              let characters = data.map(char =>char.json()).slice(0,10);
              let charExist = characters.length;
              let maxCharNumbers = 10;
                if(charExist < maxCharNumbers){
                  let charAbsent = maxCharNumbers - charExist ;
                  for (let count=0; count < charAbsent; count++) {
                    characters.push({});
                  }
                }
              this.characters = characters;
              this.getHero();
              this.getIdForChar();
          });
        });
      });
    }

    goToBooksList() {
      this.router.navigate(['books']);
    }
  
    getHero(){
      this.imgs = this.characterService.getImgCharacters();
      let characterImg;
      this.characters.forEach(character => {
          let name = character.name;
          characterImg = this.imgs.find(elem => {
            if (elem.name === name){
              return elem;
            }
          });
          character.view = characterImg;
      });
    };
  
  
  onSelect(char: any) {
    let link = this.book.url;
    let linkId = link.split('/');
    let id = linkId[linkId.length - 1];
    this.book.id = +id;
    this.booksService.idi = this.book.id;
    this.router.navigate(['char', char.id]);
  }
  
  getIdForChar(){
      for (let char of this.characters) {
        if(char.view!==undefined) {
        let link = char.url;
        let linkId = link.split('/');
        let id = linkId[linkId.length - 1];
        char.id = +id;
      }
    }
  }
  
}



