import { TestBed } from '@angular/core/testing';
import { EventsListComponent } from './events-list.component';
import { EventComponent } from './event.component';
import { EventsService } from '../services/events.service';

describe('EventsList', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                EventsListComponent,
                EventComponent
            ],
            providers: [
                {provide: EventsService, useClass: EventsService}
            ]
        }).compileComponents();
    })
    
    it('Should render title: "Hi events!"', () => {
        const fixture = TestBed.createComponent(EventsListComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        
        console.log(compiled)
        expect(compiled.querySelector('.title')?.textContent).toBe('Hi events!')
    })
})