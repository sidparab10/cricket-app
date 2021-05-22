import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from 'src/app/services/configuration.service';
import { DashboardModel } from './dashboard.component.model';

const url = "";
const CalByDstrict = "";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashboardConfig = new DashboardModel();

  constructor(
    private http: HttpClient,
    private configService: ConfigurationService
  ) { }

  ngOnInit(): void {
    this.dashboardConfig = this.configService.getComponentConfig("dashboard");
  }

}