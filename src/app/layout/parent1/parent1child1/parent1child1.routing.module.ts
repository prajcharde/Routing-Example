import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Parent1Child1Component } from "./parent1child1.component";



const routes: Routes = [{
    path: '', component: Parent1Child1Component
    
}];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
}
)
export class Parent1Child1RoutingModule {

}