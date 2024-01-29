import { Component } from '@angular/core';
import { New } from 'src/types/types';
import { NewsApiService } from '../news-api.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    list : New[] = []

    constructor(private newsService : NewsApiService) {}

    ngOnInit() {
        this.newsService.getNewsOfKino().subscribe({
            next: (response:any) => {
                this.list = response.data;
            }
        })
    }
}
