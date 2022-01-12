import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: "app-contact-us",
    templateUrl: "./contact-us.component.html",
    styleUrls: ["contact-us.component.css"]
})
export class ContactUsComponent {

    public isDirty: boolean = true;

    constructor(private router: Router){ }

    cancel(){
        this.router.navigate(["/events"]);
    }
}