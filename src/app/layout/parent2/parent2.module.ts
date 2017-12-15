import { NgModule } from '@angular/core';

import { CommonModule } from "@angular/common";
import { Parent2Component } from "./parent2.component";
import { Parent2RoutingModule } from "./parent2.routing.module";


@NgModule({
  declarations: [ 
    Parent2Component,
  ],
  imports: [
    CommonModule,
    Parent2RoutingModule
  ],
  providers: [],
  bootstrap: [Parent2Component]
})
export class Parent2Module { }