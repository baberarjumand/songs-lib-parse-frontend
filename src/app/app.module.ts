import { ParseConfigService } from './services/parse-config.service';
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import * as Parse from 'parse';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitFactory,
      deps: [ParseConfigService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/**
 * Executes prior to Angular fully bootstrapping.
 * @param config The Configuration Service
 */
export function appInitFactory(config: ParseConfigService): any {
  return () => {
    return new Promise<void>((resolve, reject) => {
      (Parse as any).serverURL = config.configParams.parseServerUrl;
      Parse.initialize(config.configParams.parseAppId);

      resolve();
    });
  };
}
