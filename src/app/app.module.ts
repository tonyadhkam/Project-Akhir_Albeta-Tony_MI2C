import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderAtComponent } from './header-at/header-at.component';
import { HomeComponent } from './home/home.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { FooterAtComponent } from './footer-at/footer-at.component';
import { BandComponent } from './band/band.component';
import { EventComponent } from './event/event.component';

//tambahkan code berikut
import { BandListComponent } from './band/band-list/band-list.component';
import { BandDetailComponent } from './band/band-detail/band-detail.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';

// tambahkan code berikut (2)
import { BandItemComponent } from './band/band-list/band-item/band-item.component';
import { EventItemComponent } from './event/event-list/event-item/event-item.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { ContactComponent } from './contact/contact.component';
import { EventStartComponent } from './event/event-start/event-start.component';
import { EventEditComponent } from './event/event-edit/event-edit.component';
import { EventService } from './event/event.service';
import { ContactEditComponent } from './contact/contact-edit/contact-edit.component';
import { ContactService } from './contact/contact.service';
import { DataStorageService } from './shared/data-storage.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderAtComponent,
    HomeComponent,
    DropdownDirective,
    FooterAtComponent,
    BandComponent,
    EventComponent,

    //tambahkan code berikut
    BandListComponent,
    BandDetailComponent,
    EventListComponent,
    EventDetailComponent,

    //tambahkan code berikut(2)
    BandItemComponent,
    EventItemComponent,
    SponsorComponent,
    ContactComponent,
    EventStartComponent,
    EventEditComponent,
    ContactEditComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [EventService,ContactService,DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
