import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router"

import {Http} from "@angular/http";
import {Houses, HoussesService} from "../../shared/houses.service";

@Component({
    moduleId: module.id,
    selector: "houses-list",
    templateUrl: "houses-list.component.html",
    styleUrls: ["houses-list.component.css"]
})

export class HouseListComponent implements OnInit {
    httpArray: any[];


    houses: Houses[];
    constructor(private router: Router,
                private http: Http,
                private housesService:HoussesService ) {
    }

    ngOnInit() {
      this.housesService.getHouses().subscribe(houses => {
        this.houses = houses;
      });
    }

    onClicked(){
      this.http.get('http://www.anapioficeandfire.com/api/books').subscribe(
        result => this.httpArray = result.json(),
        error => console.log(error.statusText))
    }

    onSelect(selected: Houses) {
        this.router.navigate(["home"]);
    }

}


