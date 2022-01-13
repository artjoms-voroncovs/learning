import { Injectable } from "@angular/core";
import { events, Event } from "../static/sampleData"
import { Subject } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class EventsService {
    events = events;

    getEvents(): Subject<any> {
        const subject = new Subject();
        setTimeout(() => {
           subject.next(this.events);
           subject.complete();
        }, 200)
    
        return subject;
    }

    getEvent(id: number): Event | undefined {
        return this.events.find(event => event.id === id);
    }
}