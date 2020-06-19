import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UploadComponent } from './upload/upload.component';
import { DemoListComponent } from './demo-list/demo-list.component';
import { StepComponent } from './step/step.component';
import { DialogComponent } from './dialog/dialog.component';
import { CanvasComponent } from './canvas/canvas.component';
import { CssComponent } from './css/css.component';
import { DropDragComponent } from './drop-drag/drop-drag.component';

const routes: Routes = [
    { path: '', redirectTo: 'homepage', pathMatch: 'full'},
    {
        path:'homepage',
        component: HomepageComponent,
    },{
        path:'upload',
        component: UploadComponent,
    },{
        path:'demo-list',
        component: DemoListComponent,
        data:{
            keep:true,
        }
    },{
        path:'step',
        component: StepComponent,
    },{
        path:'dialog',
        component: DialogComponent,
    },{
        path:'canvas',
        component: CanvasComponent,
    },{
        path:'css',
        component: CssComponent,
    },{
        path:'drop-drag',
        component: DropDragComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DemoRoutingModule {}
