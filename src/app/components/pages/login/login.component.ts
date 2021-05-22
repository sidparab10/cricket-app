import { Component, OnInit } from '@angular/core';
import { BaseComp } from 'src/app/base';
import { ConfigurationService } from 'src/app/services/configuration.service';
import { LocalService } from 'src/app/services/local-service.service';
import { LoginComponentModel } from './login.component.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComp implements OnInit {
  formType: string = 'login';
  public loginConfig = new LoginComponentModel();

  constructor(
    public locService: LocalService,
    private configService: ConfigurationService,
  ) {
    super(locService);
  }

  ngOnInit(): void {
    this.loginConfig = this.configService.getComponentConfig("login");
  }

  isLoginForm() {
    return this.formType === 'login';
  }

  toggleForm() {
    this.formType = this.formType === 'register' ? 'login' : 'register';
  }
}
