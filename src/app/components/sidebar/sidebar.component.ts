import { Component, Input, OnInit } from '@angular/core';
import { ConfigurationService } from 'src/app/services/configuration.service';
import { SidebarModel } from './sidebar.component.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sidebarConfig = new SidebarModel();
  showSidebar = true;

  constructor(
    private configService: ConfigurationService
  ) { }

  ngOnInit(): void {
    this.sidebarConfig = this.configService.getComponentConfig("sidebar");
  }

  onSidebarBtn() {
    this.showSidebar = !this.showSidebar;
  }

  getShortLabel(label: string) {
    return label.split(" ").map((word)=>{
      return word.charAt(0).toUpperCase();
    }).join("");
  }

}
