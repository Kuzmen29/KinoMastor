import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/types/user.type';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    myForm!: FormGroup;
    user : User | null = null;

    constructor(private router: Router, private appService: AppService) {
        appService.getUser$.subscribe(
            (next)=>{
                this.user = next
            }
        )
        if (this.user) {
            router.navigate([`profile`])
        }

        this.myForm = new FormGroup({
            "userEmail": new FormControl(),
            "userPassword": new FormControl()
        });  


    }

    toRegistration() {
        this.router.navigate([`registration`]);
    }

    submit() {
        this.appService.login(this.myForm.value).subscribe({
            next : (response:any)=> {
                console.log(response);
                if (response.success === 'success') {
                    this.appService.setLocalStorageUserID(response.userID)
                    this.router.navigate(['/'])
                }
            },
            error : (error)=> {
                console.log(error);
            }
        })
    }
}
