
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {HouseListComponent} from "./houses-list/houses-list.component";


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: "houses",
      component: HouseListComponent
    }
    // {
    //   path: "books/:isbn",
    //   component: BookDetailsComponent
    // }
    ]),
  ],
  exports: [RouterModule]
})
export class HousesRoutingModule {}
