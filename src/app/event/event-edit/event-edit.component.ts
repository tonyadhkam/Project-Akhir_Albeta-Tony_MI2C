import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { EventService } from '../event.service';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {
  id:number;
  editMode=false;
  eventForm: FormGroup;

  constructor( private route:ActivatedRoute,
    private eventService: EventService,
    private router: Router ) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.editMode=params['id']!=null;
        this.initForm();
      }
    )
  }

  onSubmit() {
    // const newEvent = new Event(
    //   this.eventForm.value['name'],
    //   this.eventForm.value['imagePath'],
    //   this.eventForm.value['date'],
    //   this.eventForm.value['place'],
    //   this.eventForm.value['description']);
    if (this.editMode) {
      this.eventService.updateEvent(this.id, this.eventForm.value);
    } else {
      this.eventService.addEvent(this.eventForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let eventName = '';
    let eventImagePath = '';
    let eventDate = '';
    let eventPlace = '';
    let eventDescription = '';

    if (this.editMode) {
    const event = this.eventService.getEvent(this.id);
      eventName = event.name;
      eventImagePath = event.imagePath;
      eventDate = event.date;
      eventPlace = event.place;
      eventDescription = event.description;
    }

    this.eventForm = new FormGroup({
      'name': new FormControl(eventName, Validators.required),
      'imagePath': new FormControl(eventImagePath, Validators.required),
      'date': new FormControl(eventDate, Validators.required),
      'place': new FormControl(eventPlace, Validators.required),
      'description': new FormControl(eventDescription, Validators.required)
    });
  }

}
