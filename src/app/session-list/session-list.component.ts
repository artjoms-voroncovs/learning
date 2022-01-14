import {Logger} from './../app.module';
import {Component, Input, Output, EventEmitter, OnInit, Inject} from '@angular/core';
import {Session} from '../services/session.service';
import {LOGGER_TOKEN} from '../app.module';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css'],
})
export class SessionListComponent implements OnInit {
    @Input() sessions!: Session[];
    @Output() deleteSession = new EventEmitter;
    @Output() updateSession = new EventEmitter;
    filterByDuration: number | null = null;
    visibleSessions: Session[] = [];

    constructor(@Inject('LOGGER') private logger: Logger) { }

    ngOnInit() {
      this.visibleSessions = [...this.sessions];
      this.logger.log('helloy!');
    }

    delete(sessionId: number) {
      this.deleteSession.emit(sessionId);
    }

    update(sessionId: number) {
      this.updateSession.emit(sessionId);
    }

    setFilterByDuration(duration: number | null) {
      this.filterByDuration = duration;

      this.visibleSessions = !duration ? this.sessions : this.sessions.filter((session) => {
        return session.duration === duration;
      });
    }
};
