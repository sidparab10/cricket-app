import { Component } from '@angular/core';
import { BaseComp } from './base';
import { ConfigurationService } from './services/configuration.service';
import { LocalService } from './services/local-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComp {
  constructor(public locService: LocalService, private configService: ConfigurationService) {
    super(locService);
  }
}
