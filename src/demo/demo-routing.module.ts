import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
    { path: '', redirectTo: 'homepage', pathMatch: 'full'},
    {
        path:'homepage',
        component: HomepageComponent,
    },{
        path:'upload',
        component: UploadComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DemoRoutingModule {}
