import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Parent1Child2Component } from "./parent1child2.component";
import { Parent1Child2RoutingModule } from "./parent1child2.routing,module";



@NgModule({
  declarations: [ 
    Parent1Child2Component,
  ],
  imports: [
    CommonModule,
    Parent1Child2RoutingModule
  ],
  providers: [],
  bootstrap: [Parent1Child2Component]
})
export class Parent1Child2Module { }