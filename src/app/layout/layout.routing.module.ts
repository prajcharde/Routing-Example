import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from "./layout.component";

const routes: Routes = [{
    path: '', component: LayoutComponent,
    children: [

        { path: 'parent1', loadChildren: './parent1/parent1.module#Parent1Module' },
        { path: 'parent2', loadChildren: './parent2/parent2.module#Parent2Module' }

    ]
}];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
}
)
export class LayoutRoutingModule {

}