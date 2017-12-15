import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { Parent1Component } from "./parent1.component";

const routes: Routes = [{
    path: '', component: Parent1Component,
    children: [

        { path: 'parent1child1', loadChildren: './parent1child1/parent1child1.module#Parent1Child1Module' },
        { path: 'parent1child2', loadChildren: './parent1child2/parent1child2.module#Parent1Child2Module' }

    ]
}];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
}
)
export class Parent1RoutingModule {

}