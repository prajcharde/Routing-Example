import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Parent2Child1Component } from "./parent2child1.component";
import { Parent2Child1RoutingModule } from "./parent2child1.routing.module";


@NgModule({
  declarations: [ 
    Parent2Child1Component,
  ],
  imports: [
    CommonModule,
    Parent2Child1RoutingModule
  ],
  providers: [],
  bootstrap: [Parent2Child1Component]
})
export class Parent2Child1Module { }