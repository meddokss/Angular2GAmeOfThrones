import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';


@Injectable()
export class HoussesService{
    constructor(private http: Http){}
    getHouses(){
        return this.http.get('http://www.anapioficeandfire.com/api/houses')
                   .map(res => res.json());
    }
}

export interface Houses{
  name: string;
  region: any;
}


