import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Session } from '../services/session.service';

@Component({
    selector: "app-session",
    templateUrl: "./session.component.html",
    styleUrls: ["./session.component.css"]
})
export class SessionComponent {
    @Input() session!: Session
    @Output() deleteSession = new EventEmitter();
    @Output() updateSession = new EventEmitter();

    delete(){
        this.deleteSession.emit(this.session.sessionId);
    }
    
    update(){
        this.updateSession.emit(this.session.sessionId);
    }
};