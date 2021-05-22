import { Injectable } from '@angular/core';
import ConfigurationData from './../../assets/configuration.json';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  private configData = ConfigurationData;

  constructor() {}

  getComponentConfig(compName: string) {
    return this.configData?.[compName];
  }
}
