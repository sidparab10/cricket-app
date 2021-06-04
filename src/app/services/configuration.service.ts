import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import ConfigurationData from './../../assets/configuration.json';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  private configData = ConfigurationData;
  teamData = []
  teamDataSub: Subject<any[]> = new Subject<any[]>();

  constructor() {
    this.teamDataSub.subscribe((data)=>{
      this.teamData.push(data);
      console.log(data);
    })
  }

  getComponentConfig(compName: string) {
    return this.configData?.[compName];
  }

  setTeamData(data) {
    this.teamDataSub.next(data);
  }
}
