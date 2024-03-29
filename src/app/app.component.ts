import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'KinoMastor';
    constructor(private appService: AppService, private router: Router) {
        appService.getMyKinoAll()
    }
}
