import { ActivatedRoute } from '@angular/router';
import { SessionService, Session } from './../services/session.service';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-session-details",
    templateUrl: "./session-details.component.html",
    styleUrls: ["./session-details.component.css"]
})
export class SessionDetailsComponent implements OnInit {
    editable: boolean = true;
    sessions: Session[] = [];
    eventId: number = 0;
    defaultState = {
        presentatorEmail: '',
        presentatorName: '',
        presentatorSurname: '',
        duration: 0,
        votes: 0,
        theme: '',
        description: '',
        eventId: this.eventId,
        sessionId: 0
    };
    predefinedState!: Session;
    

    constructor(
        private sessionService: SessionService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.eventId = +this.route.snapshot.params['id']
        this.predefinedState = {...this.defaultState};
        this.getSessions(this.eventId);
    }

    toggleEditable() {
        this.predefinedState = {...this.defaultState};
        this.editable = !this.editable;
    }

    getSessions(eventId: number) {
        this.sessions = this.sessionService.getSessions(eventId);
    }

    getSession(sessionId: number) {
        return this.sessionService.getSession(sessionId);
    }

    formSubmit(session: Session) {
        session.sessionId ? this.updateSession(session) : this.addSession(session);
        this.toggleEditable();
    }

    addSession(session: Session): void {
        console.log(session)
        this.sessions = this.sessionService.addSession(session);
        this.toggleEditable();
    }

    updateSession(session: Session) {
        this.sessions = this.sessionService.updateSession(session, session.sessionId);
    }

    deleteSession(sessionId: number) {
        this.sessions = this.sessionService.deleteSession(sessionId);
    }

    loadSessionToUpdate(sessionId: number) {
        const session = this.sessionService.getSession(sessionId);
        if (session) { 
            this.predefinedState = session 
            this.editable = true;
        };
    }
};