import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { KinopoiskAPIService } from '../kinopoisk-api.service';
import { AppService } from '../app.service';

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent {
    condition: string = ''
    isLoading: boolean = false;
    error: any = null;

    list : any = []
    

    constructor(private route: ActivatedRoute, private appService: AppService, private router: Router,
        private kinopoisk: KinopoiskAPIService) {
    }

    ngOnInit() {
        this.route.paramMap.pipe(
            switchMap(params => params.getAll('condition'))
        )
            .subscribe(data => this.condition = data);

        this.isLoading = true


        this.kinopoisk.getKinoBySearch(this.condition).subscribe({
        next: (response:any) => {
            this.list = response.data;
        
            this.isLoading = false;
        },
        error : (error) => {
            this.error = error;
            this.isLoading = false
        }
        });
        

    }

}
