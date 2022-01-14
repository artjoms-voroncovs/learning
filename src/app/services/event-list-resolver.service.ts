import {EventsService} from '../services/events.service';
import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EventListResolver implements Resolve<any> {
  constructor(private eventService: EventsService) { }

  resolve() {
    /* return this.eventService.getEvents().pipe(map(events => events)); */
  }
};
