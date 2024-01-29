import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    condition: string = ""
    constructor(private router: Router) {

    }

    search() {
        this.router.navigate([`search/${this.condition}`]); // переход на корень приложения
    }

    getNewFilms() {

    }
}
