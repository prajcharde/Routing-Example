import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Parent1Child2Component } from "./parent1child2.component";



const routes: Routes = [{
    path: '', component: Parent1Child2Component,
    
}];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
}
)
export class Parent1Child2RoutingModule {

}