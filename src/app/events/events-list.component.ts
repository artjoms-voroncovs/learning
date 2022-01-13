import { events } from './../static/sampleData';
import { EventsService } from '../services/events.service';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-events",
    template: `
        <div class="root">
            <h1>{{title}}</h1>
            <div class="eventsList">
                <app-event *ngFor="let event of events" [event]="event"></app-event>
            </div>
        </div>
    `,
    styles: [
        `.eventsList {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 20px;
        }`
    ]
})
export class EventsListComponent implements OnInit {
    events: any;

    constructor(private eventsService: EventsService){ }
    public title = "Hi events!";

    ngOnInit(){
         this.eventsService.getEvents().subscribe((events) => this.events = events);
    }
};
