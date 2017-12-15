import { NgModule, ModuleWithProviders } from '@angular/core';
import { AppComponent } from "./app.component";
import { Routes, RouterModule } from '@angular/router';
const routes :Routes=[
{
    path:'',component:AppComponent,
    children:[
        {
            path:'',loadChildren:'./layout/layout.module#LayoutModule'
        },
        {
            path:'layout',loadChildren:'./layout/layout.module#LayoutModule'
        }
    ]
}

];


@NgModule({
    imports:[RouterModule.forRoot(routes) ],
    exports:[RouterModule]
})
export class AppRoutingModule{
    
}