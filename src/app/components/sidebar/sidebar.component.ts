import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationService } from 'src/app/services/configuration.service';
import { SidebarModel } from './sidebar.component.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sidebarConfig = new SidebarModel();
  showSidebar = false;

  constructor(
    private configService: ConfigurationService,
    private route: Router,
    private activateRoute: ActivatedRoute
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

  onSideBtnClick(type: string) {
    switch(type) {
      case 'create-team':
      case 'create-match': {
        this.route.navigateByUrl(`home/${type}`);
        break;
      }
    }
  }

}
