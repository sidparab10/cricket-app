import { Component, OnInit } from '@angular/core';
import { BaseComp } from 'src/app/base';
import { ConfigurationService } from 'src/app/services/configuration.service';
import { LocalService } from 'src/app/services/local-service.service';
import { SnacbarService } from 'src/app/services/snackbar.service';
import { CreatTeamModel, FormInputModel } from './create-team.component.model';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss']
})
export class CreateTeamComponent extends BaseComp implements OnInit {

  createTeamConfig = new CreatTeamModel();
  formInputs: FormInputModel[];

  constructor(
    public locService: LocalService,
    private configService: ConfigurationService,
    private snackService: SnacbarService
  ) {
    super(locService);
  }

  ngOnInit(): void {
    this.createTeamConfig = this.configService.getComponentConfig("create-team");
    this.formInputs = this.createTeamConfig.formInputs;
  }

  changeCheckboxStatus(idx) {
    this.formInputs[idx].checkboxStatus = !this.formInputs[idx].checkboxStatus;
  }

  addTeam() {
    this.configService.setTeamData({
      name: "asdak",
      score: 12
    });
    this.snackService.showNotification('team added')
  }

}
