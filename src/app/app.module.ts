import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StartupService, DefaultInterceptor } from './core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RoutesModule } from './routes/routes.module';
import { CoreModule } from './core/core.module';
import { ThemeModule } from './theme/theme.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { commonConfig } from '../assets/config/config.js';

export function StartupServiceFactory(startupService: StartupService) {
  return () => startupService.load();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    SharedModule,
    CoreModule,
    ThemeModule,
    RoutesModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true },
    StartupService,
    {
      provide: APP_INITIALIZER,
      useFactory: StartupServiceFactory,
      deps: [StartupService],
      multi: true,
    },
    { provide:'CONFIG', useValue: commonConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
