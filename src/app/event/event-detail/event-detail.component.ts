import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../event.model';
import { EventService } from '../event.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  // @Input() event:Event;
  event:Event;
  id:number;

  constructor(private eventService:EventService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.event=this.eventService.getEvent(this.id);
      }
    )
  }

  onEditEvent(){
    this.router.navigate(['edit'],{relativeTo:this.route});
  }

  onDeleteEvent() {
    this.eventService.deleteEvent(this.id);
    this.router.navigate(['/event']);
  }

}
