import { RouterModule, ActivatedRoute } from '@angular/router';
import { EventsService } from '../services/events.service';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-event-details",
    templateUrl: "./event-details.component.html",
    styleUrls: ["./event-details.component.css"],

})
export class EventDetailsComponent implements OnInit {
    event: any;
    constructor(
        private eventsService: EventsService,
        private router: ActivatedRoute
    ) { }

    ngOnInit() {
        const id = +this.router.snapshot.params['id']
        this.event = this.eventsService.getEvent(id);
    }
}