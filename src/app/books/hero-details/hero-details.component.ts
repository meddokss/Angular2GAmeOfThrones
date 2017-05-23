import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
// import {Http} from '@angular/http';
// import {BooksService} from '../../shared/books.service';
import {CharacterService} from '../../shared/characters.service';
// import {Bookses} from '../../shared/books.service';
import {Images, ImgService} from '../../shared/img.service';
import {BooksService} from '../../shared/books.service';


@Component({
  moduleId: module.id,
  selector: 'hero-details',
  templateUrl: 'hero-details.component.html',
  styleUrls: ['hero-details.component.css']
})

export class HeroDetailsComponent implements OnInit {
  
  char: Char;
  imgs: any;
  bookImgs: Images[];
  idi: any;
  
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private characterService: CharacterService,
              private booksService: BooksService,
              private imgService: ImgService) {
  }
  
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.characterService.getChar(params.id).subscribe(char => {
        this.char = char;
        this.getHeroImgBg();
        this.CharIncludeBooksImg();
      });
      
    });
  
    this.idi = this.booksService.idi;
  }
  
  CharIncludeBooksImg() {
    this.bookImgs = this.imgService.getImg();
    let booksId = this.char.povBooks;
    let booksImgThatIFind;
    let arr = [];
    for (let book of booksId) {
      let linkId = book.split('/');
      let b = +linkId[linkId.length - 1];
      booksImgThatIFind = this.bookImgs.find(elem => {
        if (elem.id === b) {
          return elem.view;
        }
      });
      arr.push(booksImgThatIFind);
    }
    this.char.viewBook = arr;
  }
  
  
  getHeroImgBg() {
    this.imgs = this.characterService.getImgCharacters();
    let characterImg;
    let name = this.char.name;
    characterImg = this.imgs.find(elem => {
      if (elem.name === name) {
        return elem.view;
      }
    });
    this.char.view = characterImg;
  };
  
  
  goToBooksList(): void {
    console.log(this.idi);
    this.router.navigate(['books', this.idi]);
  }
  
  onSelect(selected: any) {
    this.router.navigate(['books', selected.id]);
  }
}

export interface Char {
  id: number;
  url: string;
  name: string,
  gender: string,
  culture: string,
  povBooks: any,
  playedBy: string,
  view: string,
  titles: string,
  viewBook: any
}


// CharIncludeBooksImg() {
//   this.bookImgs = this.imgService.getImg();
//   let booksId = this.char.povBooks;
//   let booksImgThatIFind;
//   let arr = [];
//   for (let book of booksId) {
//     let linkId = book.split('/');
//     let b = +linkId[linkId.length - 1];
//     booksImgThatIFind = this.bookImgs.find(elem => {
//       if (elem.id === b) {
//         return elem.view;
//       }
//     });
//     booksImgThatIFind.link = book;
//     arr.push(booksImgThatIFind);
//   }
//   this.char.viewBook = arr;
// }
//
