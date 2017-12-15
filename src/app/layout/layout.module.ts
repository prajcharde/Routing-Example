import { NgModule } from '@angular/core';
import { LayoutComponent } from "./layout.component";
import { LayoutRoutingModule } from "./layout.routing.module";


@NgModule({
  declarations: [ 
    LayoutComponent,
  ],
  imports: [
    LayoutRoutingModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class LayoutModule { }
