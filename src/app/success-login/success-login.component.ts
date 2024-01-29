import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'success-login',
    templateUrl: './success-login.component.html',
    styleUrls: ['./success-login.component.scss']
})
export class SuccessLoginComponent {
    @Input() message: any;

    constructor(private router : Router) {
        
    }
    toLogin() {
        this.router.navigate([`login`]);
    }
}
