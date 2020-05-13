import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { SidebarComponent } from './admin-layout/sidebar/sidebar.component';
import { HeaderComponent } from './admin-layout/header/header.component';
import { BreadcrumbComponent } from './admin-layout/breadcrumb/breadcrumb.component';
import { FooterComponent } from './admin-layout/footer/footer.component';
import { SidebarMenuComponent } from './admin-layout/sidebar/sidebar-menu/sidebar-menu.component';
import { SidebarItemComponent } from './admin-layout/sidebar/sidebar-item/sidebar-item.component';

const SETTINGDRAWER = [];
const COMPONENTS = [AdminLayoutComponent];

@NgModule({
  declarations: [
    ...COMPONENTS,
    SidebarComponent,
    HeaderComponent,
    BreadcrumbComponent,
    FooterComponent,
    SidebarItemComponent,
    SidebarMenuComponent,
  ],
  imports: [
    SharedModule,
  ],
  entryComponents: SETTINGDRAWER
})
export class ThemeModule { }
