import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
import { KinopoiskAPIService } from "../kinopoisk-api.service";
import { switchMap } from 'rxjs';

@Component({
    selector: 'kino-list',
    templateUrl: './kino-list.component.html',
    styleUrls: ['./kino-list.component.scss']
})
export class KinoListComponent {

    @Input()
    list: any = []
    
    constructor(private router : Router) {

    }

    toFilm(id:string) {
        this.router.navigate([`film/${id}`])
    }
}