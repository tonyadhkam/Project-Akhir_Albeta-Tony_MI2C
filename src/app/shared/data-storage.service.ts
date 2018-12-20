import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { EventService } from "../event/event.service";
import { Event } from "../event/event.model";

@Injectable()
export class DataStorageService {
    constructor(private http: Http, private eventService: EventService) {}

    storeEvents() {
        return this.http.put('https://ng-event-band.firebaseio.com/events.json', this.eventService.getEvents());
    }

    getEvents() {
        this.http.get('https://ng-event-band.firebaseio.com/events.json')
        .subscribe(
            (response: Response) => {
               const events: Event[] = response.json(); 
               this.eventService.setEvents(events);
            }
        );
    }
}