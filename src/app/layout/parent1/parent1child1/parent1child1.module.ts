import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Parent1Child1Component } from "./parent1child1.component";
import { Parent1Child1RoutingModule } from "./parent1child1.routing.module";


@NgModule({
  declarations: [ 
    Parent1Child1Component,
  ],
  imports: [
    CommonModule,
    Parent1Child1RoutingModule
  ],
  providers: [],
  bootstrap: [Parent1Child1Component]
})
export class Parent1Child1Module { }