import { Component, OnInit } from '@angular/core';
import { BaseComp } from 'src/app/base';
import { ConfigurationService } from 'src/app/services/configuration.service';
import { LocalService } from 'src/app/services/local-service.service';
import { CreatMatchModel, FormInputModel } from './create-team.component.model';

@Component({
  selector: 'app-create-match',
  templateUrl: './create-match.component.html',
  styleUrls: ['./create-match.component.scss']
})
export class CreateMatchComponent extends BaseComp implements OnInit {

  createTeamConfig: any;
  formInputs: any;

  constructor(
    public locService: LocalService,
    private configService: ConfigurationService,
  ) {
    super(locService);
  }

  ngOnInit(): void {
    this.createTeamConfig = this.configService.getComponentConfig("create-match");
    this.formInputs = this.createTeamConfig.formInputs;
  }

  changeCheckboxStatus(idx) {
    this.formInputs[idx].checkboxStatus = !this.formInputs[idx].checkboxStatus;
  }
}
