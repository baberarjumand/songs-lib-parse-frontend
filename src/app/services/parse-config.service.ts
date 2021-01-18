import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ParseConfigService {
  configParams = {
    parseAppId: environment.parseAppId,
    parseMasterKey: environment.parseMasterKey,
    // mongoDbUri: environment.mongoDbUri,
    parseServerUrl: environment.parseServerUrl,
  };

  constructor() {}
}
