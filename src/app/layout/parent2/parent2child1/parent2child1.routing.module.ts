import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Parent2Child1Component } from "./parent2child1.component";




const routes: Routes = [{
    path: '', component: Parent2Child1Component,
    
}];
@NgModule({
    imports: [RouterModule.forChild(routes) ],
    exports: [RouterModule]
}
)
export class Parent2Child1RoutingModule {

}