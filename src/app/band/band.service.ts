import { Injectable, EventEmitter } from '@angular/core';
import { Band } from '../band/band.model';

@Injectable({
  providedIn: 'root'
})
export class BandService {

  bandSelected = new EventEmitter<Band>();

  //propert:class band
  bands:Band[]=[
    new Band('Band S.I.D','Superman Is Dead adalah sebuah grup musik dari Bali',
  '../src/app/img/sid2.jpg'),
    new Band('Dialog Senja','Dialog Senja merupakan grup/duo.',
  '../src/app/img/ds.jpg'),
  ];

  getBands(){
    return this.bands.slice();
  }

constructor() { }

}
