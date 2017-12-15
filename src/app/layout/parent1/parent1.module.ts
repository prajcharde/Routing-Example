import { NgModule } from '@angular/core';
import { Parent1Component } from "./parent1.component";
import { Parent1RoutingModule } from "./parent1.routing.module";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [ 
    Parent1Component,
  ],
  imports: [
    CommonModule,
    Parent1RoutingModule
  ],
  providers: [],
  bootstrap: [Parent1Component]
})
export class Parent1Module { }
