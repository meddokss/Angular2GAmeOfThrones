import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';


@Injectable()
export class BooksService{
    constructor(private http: Http){}
    books: any;
    idi: any;


    getBooks(){
        console.log(this.idi);
        return this.http.get('http://www.anapioficeandfire.com/api/books')
                   .map(res => res.json());

    }

    getBookiD(id: any){
      return this.http.get(`http://www.anapioficeandfire.com/api/books/${id}`)
        .map(res => res.json());
    }



}

export interface Bookses{
  url: string;
  name: string;
  isbn: any;
  id: any;
  view: any;
  povCharacters:any;
  characters: any;
  idi: any;
}





