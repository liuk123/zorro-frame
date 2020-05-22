import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomepageComponent } from './homepage/homepage.component';
import { DemoRoutingModule } from './demo-routing.module';
import { UploadComponent } from './upload/upload.component';
import { DemoListComponent } from './demo-list/demo-list.component';
import { AsyncDirective } from './homepage/rx-async.directive';

@NgModule({
  declarations: [HomepageComponent, UploadComponent, DemoListComponent,AsyncDirective],
  imports: [
    SharedModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
