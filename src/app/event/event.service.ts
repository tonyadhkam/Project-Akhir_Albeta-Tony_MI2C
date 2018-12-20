import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Event } from '../event/event.model';

@Injectable()
export class EventService {
  eventsChanged = new Subject<Event[]>();

   //property: class event
   events:Event[]=[
    new Event('We The Fest','Selasa, 26 Desember 2018','Kusuma Agrowisata, Batu','We The Fest adalah festival musik, seni, dan fashion',
  '../src/app/img/wtf.jpg'),
    new Event('Java Rockin Land','Rabu, 01 Januari 2019','Gedung Dome UMM, Malang','Java Rockin’land 2018 mengusung tema musik rock',
  '../src/app/img/jrl.jpg')
  ];

  setEvents(events: Event[]) {
    this.events = events;
    this.eventsChanged.next(this.events.slice());
  }

  getEvents(){
    return this.events.slice();
  }

  getEvent(index:number){
    return this.events[index];
  }

  addEvent(event: Event) {
    this.events.push(event);
    this.eventsChanged.next(this.events.slice());
  }

  updateEvent(index: number, newEvent: Event) {
    this.events[index] = newEvent;
    this.eventsChanged.next(this.events.slice());
  }

  deleteEvent(index: number) {
    this.events.splice(index, 1);
    this.eventsChanged.next(this.events.slice());
  }

constructor() { }

}
