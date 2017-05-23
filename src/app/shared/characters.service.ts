import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

export const characters = [
  {
    name: 'Daenerys Targaryen',
    bg: '../../../assets/heroimg/Daenerys.jpg',
    view: '../../../assets/heroimg/DaenerysTargaryen.jpg',

  },

  {
    name: 'Arya Stark',
    bg: '../../../assets/heroimg/Arya.jpg',
    view: '../../../assets/heroimg/AryaStark.jpg',
  },

  {
    name: 'Brandon Stark',
    bg: '../../../assets/heroimg/Brandon.jpg',
    view: '../../../assets/heroimg/BrandonStark.jpg',
  },

  {
    name: 'Catelyn Stark',
    bg: '../../../assets/heroimg/Catelyn.jpg',
    view: '../../../assets/heroimg/CatelynStark.jpg',
  },

  {
    name: 'Eddard Stark',
    bg: '../../../assets/heroimg/Eddard.jpg',
    view: '../../../assets/heroimg/EddardStark.jpg',
  },

  {
    name: 'Tyrion Lannister',
    bg: '../../../assets/heroimg/Tyrion.jpg',
    view: '../../../assets/heroimg/TyrionLannister.jpg',
  },

  {
    name: 'Jon Snow',
    bg: '../../../assets/heroimg/Jon.jpg',
    view: '../../../assets/heroimg/JonSnow.jpg',
  },

  {
    name: 'Sansa Stark',
    bg: '../../../assets/heroimg/Sansa.jpg',
    view: '../../../assets/heroimg/SansaStark.jpg',
  },

  {
    name: 'Will',
    bg: '../../../assets/heroimg/Will.jpg',
    view: '../../../assets/heroimg/Will.jpg',
  },
  {
    name: 'Duncan',
    bg: '../../../assets/heroimg/Duncan.jpg',
    view: '../../../assets/heroimg/Duncan.jpg',
  },
  {
    name: "Melisandre",
    bg: '../../../assets/heroimg/Melisandre.jpg',
    view: '../../../assets/heroimg/Melisandre.jpg',
  }
];


@Injectable()
export class CharacterService{
    constructor(private http: Http){}

    imgCharacters: Characters[] = characters;

    getChar(id){
      return this.http.get(`http://www.anapioficeandfire.com/api/characters/${id}`)
        .map(res => res.json());
    }

    getImgCharacters(){
      return this.imgCharacters;
    }

}

export interface Characters{
  name: any;
  view: any;
  bg:any;
}


