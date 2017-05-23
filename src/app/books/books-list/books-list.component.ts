import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router'
import {Bookses, BooksService} from '../../shared/books.service';
import {ImgService, Images} from '../../shared/img.service';


@Component({
	moduleId: module.id,
	selector: 'books-list',
	templateUrl: 'books-list.component.html',
	styleUrls: ['books-list.component.css']
})

export class BookListComponent implements OnInit {

	books: Bookses[];
	imgs: Images[];

	constructor(private router: Router,
							private imgService: ImgService,
							private booksService: BooksService) {
	}

	ngOnInit() {
		this.booksService.getBooks().subscribe(books => {
			this.books = books;
      for (let books of this.books) {
				let link = books.url;
				let linkId = link.split('/');
				let id = linkId[linkId.length - 1];
				books.id = +id;
			}

			this.imgs = this.imgService.getImg();
			let img;
			this.books.forEach(book => {
				let id = book.id;
				img = this.imgs.find(elem => {
					if (elem.id === id) {
						return elem.view;
					}
				});
				book.view = img;
			});
		});
  }


	onSelect(selected: Bookses) {
		this.router.navigate(['books', selected.id]);
	}
  
}



