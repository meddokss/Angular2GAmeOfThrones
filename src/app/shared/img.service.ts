import {Injectable} from "@angular/core";

export const images = [
  {
    id: 1,
    view: '../assets/1.png',
  },
  
  {
    id: 2,
    view: '../assets/2.png',
  },
  
  {
    id: 3,
    view: '../assets/3.png',
  },
  
  {
    id: 4,
    view: '../assets/4.png',
  },
  
  {
    id: 5,
    view: '../assets/5.png',
  },
  
  {
    id: 6,
    view: '../assets/6.png',
  },
  
  {
    id: 7,
    view: '../assets/7.png',
  },
  
  {
    id: 8,
    view: '../assets/8.png',
  },
  
  {
    id: 9,
    view: '../assets/9.png',
  },
  
  {
    id: 10,
    view: '../assets/10.png',
  }
];


@Injectable()
export class ImgService {
  images: Images[] = images;
  
  getImg(){
    return this.images;
  }
}

export interface Images{
  id: number;
  view: any;
}
