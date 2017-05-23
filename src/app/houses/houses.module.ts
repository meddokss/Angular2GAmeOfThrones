import { NgModule } from "@angular/core";
import {CommonModule} from "@angular/common";
import {HousesRoutingModule} from "./houses-routing.module";
import {HouseListComponent} from "./houses-list/houses-list.component";



@NgModule({
    imports: [
        HousesRoutingModule,
        CommonModule
    ],
    declarations: [
        HouseListComponent
    ]
})
export class HousesModule {}

