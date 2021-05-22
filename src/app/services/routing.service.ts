import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RoutingService {
    routeVal = new Observable();

    constructor(
        private router: Router
    ) {
    }
}
