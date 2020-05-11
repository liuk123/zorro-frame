import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomepageComponent } from './homepage/homepage.component';
import { DemoRoutingModule } from './demo-routing.module';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [HomepageComponent, UploadComponent],
  imports: [
    SharedModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
