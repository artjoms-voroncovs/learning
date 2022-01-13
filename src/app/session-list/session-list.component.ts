import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Session } from "../services/session.service"

@Component({
    selector: "app-session-list",
    templateUrl: "./session-list.component.html",
    styleUrls: ["./session-list.component.css"]
})
export class SessionListComponent {
    @Input() sessions!: Session[]
    @Output() deleteSession = new EventEmitter;
    @Output() updateSession = new EventEmitter;

    delete(sessionId: number){
        this.deleteSession.emit(sessionId);
    }

    update(sessionId: number){
        this.updateSession.emit(sessionId);
    }
};