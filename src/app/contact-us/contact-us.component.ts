import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';


type FormValues = {
    name: string
    advice: string
}

@Component({
    selector: "app-contact-us",
    templateUrl: "./contact-us.component.html",
    styleUrls: ["contact-us.component.css"]
})
export class ContactUsComponent implements OnInit {

    public isDirty: boolean = true;
    public name!: FormControl;
    public advice!: FormControl;
    public form!: FormGroup;
    public buttonError: boolean = false;

    constructor(private router: Router) { }

    ngOnInit() {
        this.name = new FormControl('', [this.customRequired]);
        this.advice = new FormControl('', Validators.required);

        this.form = new FormGroup({
            name: this.name,
            advice: this.advice
        })

        this.form.valueChanges.subscribe(v => console.log(this.form, this.name, this.advice))
    }

    onSubmit() {
        console.log(this.form.value)
    }

    showButtonError() {
        this.buttonError = true;
        console.log(this.form.errors);
    }

    hideButtonError() {
        this.buttonError = false;
    }

    cancel() {
        this.router.navigate(["/events"]);
    }


    customRequired(control: AbstractControl) {
        if (!control.value.trim().length) {
            return { 'customRequired': "You have 0 letters in your field." }
        }

        return null
    }
}
