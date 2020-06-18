import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomepageComponent } from './homepage/homepage.component';
import { DemoRoutingModule } from './demo-routing.module';
import { UploadComponent } from './upload/upload.component';
import { DemoListComponent } from './demo-list/demo-list.component';
import { StepComponent } from './step/step.component';
import { DialogComponent } from './dialog/dialog.component';
import { CanvasComponent } from './canvas/canvas.component';
import { CssComponent } from './css/css.component';
import { FormGroupComponent } from './demo-list/form-group/form-group.component';
import { FormItemComponent } from './demo-list/form-item/form-item.component';

@NgModule({
  declarations: [
    HomepageComponent,
    UploadComponent,
    DemoListComponent,
    StepComponent,
    DialogComponent,
    CanvasComponent,
    CssComponent,
    FormGroupComponent,
    FormItemComponent,
  ],
  imports: [
    SharedModule,
    DemoRoutingModule,
  ]
})
export class DemoModule { }
