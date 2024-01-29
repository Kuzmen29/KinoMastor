import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { User } from 'src/types/user.type';

@Component({
    selector: 'header-settings',
    templateUrl: './header-settings.component.html',
    styleUrls: ['./header-settings.component.scss']
})
export class HeaderSettingsComponent {
    user: User | null = null;

    login: boolean = false;

    constructor(private router: Router, private appService: AppService) {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false; // Перезагружает компонент при повторном клике на ссылку
    }

    ngOnInit() {
        this.appService.getUser$.subscribe(
            (next:any)=> {
                this.user = next;
                if (this.user) {
                    this.login = true
                }
                else {
                    this.login = false
                    console.log(this.user);
                }
            }
        )
        
    }

    toUserOrLogin() {      
        if (this.login) {
            this.router.navigate([`profile`])
        }
        else {
            this.router.navigate(['login'])
        }
    }
    logout() {
        this.appService.deleteUser()
        this.ngOnInit();
        this.router.navigate([`/`]);
    }
    toRegistration() {
        this.router.navigate([`registration`]);
    }
}
