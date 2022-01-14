import {ActivatedRoute} from '@angular/router';
import {Component, Output, EventEmitter, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Session} from '../services/session.service';

@Component({
  selector: 'app-session-editor',
  templateUrl: './session-editor.component.html',
  styleUrls: ['./session-editor.component.css'],
})
export class SessionEditorComponent implements OnInit {
    @Output() formValues = new EventEmitter();
    @Input() predefinedState!: Session;

    presentatorName!: FormControl;
    presentatorEmail!: FormControl;
    presentatorSurname!: FormControl;
    duration!: FormControl;
    theme!: FormControl;
    description!: FormControl;
    form!: FormGroup;

    constructor() { }

    ngOnInit() {
      this.presentatorName = new FormControl(this.predefinedState.presentatorName, Validators.required);
      this.presentatorEmail = new FormControl(this.predefinedState.presentatorEmail, Validators.required);
      this.presentatorSurname = new FormControl(this.predefinedState.presentatorSurname, Validators.required);
      this.duration = new FormControl(this.predefinedState.duration, Validators.required);
      this.theme = new FormControl(this.predefinedState.theme, Validators.required);
      this.description = new FormControl(this.predefinedState.description, Validators.required);

      this.form = new FormGroup({
        presentatorEmail: this.presentatorEmail,
        presentatorName: this.presentatorName,
        presentatorSurname: this.presentatorSurname,
        duration: this.duration,
        theme: this.theme,
        description: this.description,
      });
    }

    onSubmit() {
      console.log(this.form.value);
      const formValues: Session = {
        ...this.form.value,
        eventId: this.predefinedState.eventId,
        votes: this.predefinedState.votes,
        sessionId: this.predefinedState.sessionId,
      };

      this.formValues.emit(formValues);
    }
};
