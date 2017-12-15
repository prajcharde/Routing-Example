import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Parent2Child2Component } from "./parent2child2.component";
import { Parent2Child2RoutingModule } from "./parent2child2.routing.module";


@NgModule({
  declarations: [ 
    Parent2Child2Component,
  ],
  imports: [
    CommonModule,
    Parent2Child2RoutingModule
  ],
  providers: [],
  bootstrap: [Parent2Child2Component]
})
export class Parent2Child2Module { }