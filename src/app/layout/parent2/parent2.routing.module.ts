import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { Parent2Component } from "./parent2.component";

const routes: Routes = [{
    path: '', component: Parent2Component,
    children: [

        { path: 'parent2child1', loadChildren: './parent2child1/parent2child1.module#Parent2Child1Module' },
        { path: 'parent2child2', loadChildren: './parent2child2/parent2child2.module#Parent2Child2Module' }

    ]
}];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
}
)
export class Parent2RoutingModule {

}