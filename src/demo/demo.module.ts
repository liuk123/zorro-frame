import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomepageComponent } from './homepage/homepage.component';
import { DemoRoutingModule } from './demo-routing.module';
import { FormComponent } from './form/form.component';
import { ElementComponent } from './element/element.component';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [HomepageComponent, UploadComponent, FormComponent, ElementComponent],
  imports: [
    SharedModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
