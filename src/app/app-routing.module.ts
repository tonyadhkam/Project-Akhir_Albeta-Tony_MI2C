import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BandComponent } from './band/band.component';
import { EventComponent } from './event/event.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { ContactComponent } from './contact/contact.component';
import { EventStartComponent } from './event/event-start/event-start.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { EventEditComponent } from './event/event-edit/event-edit.component';

const appRoutes:Routes=[
    { path:'', redirectTo:'/home',pathMatch:'full' },
    { path:'home', component:HomeComponent },
    { path:'band', component:BandComponent },
    { path:'event', component:EventComponent,children:[
        { path:'',component:EventStartComponent },
        { path:'new',component:EventEditComponent },
        { path:':id',component:EventDetailComponent },
        { path:':id/edit',component:EventEditComponent },
    ]},
    { path:'sponsor', component:SponsorComponent },
    { path:'contact', component:ContactComponent },
];

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})

export class AppRoutingModule{}