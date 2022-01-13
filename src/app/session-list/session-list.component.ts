import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { Session } from "../services/session.service"

@Component({
    selector: "app-session-list",
    templateUrl: "./session-list.component.html",
    styleUrls: ["./session-list.component.css"]
})
export class SessionListComponent implements OnInit{
    @Input() sessions!: Session[]
    @Output() deleteSession = new EventEmitter;
    @Output() updateSession = new EventEmitter;
    filterByDuration: number | null = null
    visibleSessions: Session[] = [];

    ngOnInit(){
        this.visibleSessions = [...this.sessions];
    }

    delete(sessionId: number){
        this.deleteSession.emit(sessionId);
    }

    update(sessionId: number){
        this.updateSession.emit(sessionId);
    }

    setFilterByDuration(duration: number | null){
        this.filterByDuration = duration;

        this.visibleSessions =  !duration ? this.sessions : this.sessions.filter((session) => {
            return session.duration === duration;
        })
    }
};