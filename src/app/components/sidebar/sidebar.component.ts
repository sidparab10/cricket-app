import { Component, Input, OnInit } from '@angular/core';
import { ConfigurationService } from 'src/app/services/configuration.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sidebarConfig = {};
  showSidebar = false;

  constructor(
    private configService: ConfigurationService
  ) { }

  ngOnInit(): void {
    this.sidebarConfig = this.configService.getComponentConfig("sidebar");
  }

  onSidebarBtn() {
    this.showSidebar = !this.showSidebar;
  }

}
