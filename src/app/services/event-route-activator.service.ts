import { EventsService } from '../services/events.service';
import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot } from "@angular/router";

@Injectable({
    providedIn: "root"
})
export class EventRouteActivatorService implements CanActivate {

    constructor(
        private eventsService: EventsService,
        private router: Router,
    ) { }

    canActivate(route: ActivatedRouteSnapshot) {
        const id = +route.params["id"];
        const eventExists = !!this.eventsService.getEvent(id);
        if(!eventExists) this.router.navigate(['/404']); 
        return eventExists;
    }
}