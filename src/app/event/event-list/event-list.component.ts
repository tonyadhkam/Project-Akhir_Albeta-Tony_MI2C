import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Event } from '../event.model';
import { EventService } from '../event.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

 // @Output() eventWasSelected=new EventEmitter<Event>();
  events:Event[];
 
  constructor(private eventService:EventService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.eventService.eventsChanged
    .subscribe(
      (events: Event[]) => {
        this.events = events;
      }
    );
    this.events= this.eventService.getEvents();
  }

  // onEventSelected(event:Event){
  //   this.eventWasSelected.emit(event);
  // }

  onNewEvent(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }

}
