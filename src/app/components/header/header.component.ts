import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComp } from 'src/app/base';
import { ConfigurationService } from 'src/app/services/configuration.service';
import { LocalService } from 'src/app/services/local-service.service';
import { HeaderComponentModel } from './header.component.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseComp implements OnInit {
  public headerConfig = new HeaderComponentModel();

  constructor(
    public locService: LocalService,
    private configService: ConfigurationService,
    private router: Router
  ) {
    super(locService);
  }

  ngOnInit(): void {
    this.headerConfig = this.configService.getComponentConfig("header");
  }

  onNavBtnClick(path: string) {
    this.router.navigateByUrl(path);
  }
}
