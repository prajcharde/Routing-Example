import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Parent2Child2Component } from "./parent2child2.component";





const routes: Routes = [{
    path: '', component: Parent2Child2Component
    
}];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
}
)
export class Parent2Child2RoutingModule {

}